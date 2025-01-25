import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import axios from 'axios';

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

// Keyframes for animations
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(15px, -15px); }
  100% { transform: translate(0, 0); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled components
const AccountContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #3b00a2, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 1rem;
`;

const FloatingShape = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: ${floatAnimation} 6s infinite ease-in-out;
`;

const AccountHeader = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin: 2rem 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: ${pulseAnimation} 2s infinite ease-in-out;
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(255,255,255,0.2);
  border-radius: 30px;
  padding: 0.5rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
`;

const Tab = styled.button`
  background: ${props => props.active ? 'rgba(255,255,255,0.9)' : 'transparent'};
  color: ${props => props.active ? '#333' : 'white'};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 25px;
  margin: 0.25rem;
  flex: 1 1 auto;

  &:hover {
    background: rgba(255,255,255,0.9);
    color: #333;
    transform: translateY(-3px);
  }
`;

const ContentBox = styled.div`
  background: rgba(255,255,255,0.9);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  transition: all 0.3s ease;
`;

const CreditInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  background: rgba(255,255,255,0.5);
  padding: 1rem;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.8);
    transform: scale(1.02);
  }
`;

const Button = styled.a`
  background: linear-gradient(45deg, #6e8efb, #a777e3);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(45deg, #5c7cfa, #8f5ed6);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

// Main Account Component
function Account() {
  const [activeTab, setActiveTab] = useState('credit');
  const [credits, setCredits] = useState(null);
  const [error, setError] = useState('');
  const [transferRecipient, setTransferRecipient] = useState('');
  const [transferAmount, setTransferAmount] = useState(0);

  // Fetch credits from backend
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/credits`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCredits(response.data);
      } catch (err) {
        setError('Error fetching credits. Please try again later.');
      }
    };
    fetchCredits();
  }, []);

  // Handle credit transfer
  const handleTransfer = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/transfer-credits`, 
        { recipientEmail: transferRecipient, amount: transferAmount }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      if (response.status === 200) {
        alert('Transfer successful!');
        // Fetch updated credits
        // fetchCredits();
      }
    } catch (err) {
      alert('Error transferring credits. Please try again later.');
    }
  };

  return (
    <>
      <GlobalStyle />
      <AccountContainer>
        <FloatingShape />
        <AccountHeader>My Account</AccountHeader>

        {/* Tabs */}
        <TabContainer>
          <Tab active={activeTab === 'credit'} onClick={() => setActiveTab('credit')}>Plan & Credit</Tab>
          <Tab active={activeTab === 'api'} onClick={() => setActiveTab('api')}>API Key</Tab>
          <Tab active={activeTab === 'refer'} onClick={() => setActiveTab('refer')}>Refer & Earn</Tab>
          <Tab active={activeTab === 'billing'} onClick={() => setActiveTab('billing')}>Billing</Tab>
          <Tab active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>Settings</Tab>
        </TabContainer>

        {/* Plan & Credit */}
        {activeTab === 'credit' && (
          <ContentBox>
            <h2>Total Credit: {credits ? credits.total : 'Loading...'}</h2>

            <CreditInfo>
              <div>
                <h3>Subscription Credit</h3>
                <p>{credits ? credits.subscriptionCredit : 'Loading...'}</p>
              </div>
              <div>
                <h3>Top Up Credit</h3>
                <p>{credits ? credits.topUpCredit : 'Loading...'}</p>
              </div>
              <div>
                <h3>Free Credit</h3>
                <p>{credits ? credits.freeCredit : 'Loading...'}</p>
              </div>
            </CreditInfo>

            {/* Transfer Credits Section */}
            <CreditInfo>
              <h3>Transfer Credits</h3>
              <input
                type="email"
                placeholder="Recipient's email"
                value={transferRecipient}
                onChange={(e) => setTransferRecipient(e.target.value)}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
              <input
                type="number"
                placeholder="Amount to Transfer"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />
              <Button onClick={handleTransfer}>Transfer Credits</Button>
            </CreditInfo>
          </ContentBox>
        )}

        {/* Other Tabs */}
        {activeTab === 'api' && (
          <ContentBox>
            <h2>Your API Key</h2>
            {/* Placeholder for API Key */}
            <p>Your API Key is: XXXXXXXXXXXXX</p>
          </ContentBox>
        )}
        {/* Other content for Refer, Billing, Settings, etc. can be added similarly */}
      </AccountContainer>
    </>
  );
}

export default Account;
