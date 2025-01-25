import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Twinkle effect for background stars
const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} ${props => props.duration}s infinite;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Pagination = styled.div`
  margin-top: 20px;
  button {
    margin: 0 5px;
    padding: 8px 12px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    &:disabled {
      background-color: gray;
    }
  }
`;

const CreditTransferForm = styled.div`
  margin-top: 40px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  h4 {
    margin-bottom: 20px;
  }
  input {
    margin-right: 10px;
    padding: 8px;
    border: none;
    border-radius: 4px;
  }
  button {
    padding: 8px 12px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');
  const [transferSuccess, setTransferSuccess] = useState('');
  const [transferError, setTransferError] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          navigate('/admin-login');
          return;
        }
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard?page=${currentPage}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.users);
        setTotalPages(response.data.total_pages);
      } catch (err) {
        setError('Error fetching data. Please log in again.');
        navigate('/admin-login');
      }
    };

    fetchData();
  }, [navigate, currentPage]);

  const stars = Array.from({ length: 50 }, (_, i) => (
    <Star
      key={i}
      duration={Math.random() * 5 + 2}
      top={Math.random() * 100}
      left={Math.random() * 100}
    />
  ));

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    setTransferSuccess('');
    setTransferError('');

    const token = localStorage.getItem('adminToken');
    if (!token) {
      setTransferError('Please log in again.');
      navigate('/admin-login');
      return;
    }

    if (!selectedUserId || !transferAmount) {
      setTransferError('Please select a user and enter a valid amount.');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/transfer-credit`,
        {
          user_id: selectedUserId,
          amount: transferAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setTransferSuccess('Credit transferred successfully!');
        setTransferAmount('');
        setSelectedUserId('');
      } else {
        setTransferError('Failed to transfer credits.');
      }
    } catch (err) {
      setTransferError('Error occurred during the transfer.');
    }
  };

  return (
    <DashboardContainer>
      {stars}
      <Content>
        <h1>Admin Dashboard</h1>
        {error && <p className="error">{error}</p>}
        {!error && (
          <>
            <h3>User Details</h3>
            <Table>
              <thead>
                <tr>
                  <Th>Full Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Credits</Th>
                  <Th>Action</Th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <Td>{user.fullname}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role}</Td>
                    <Td>{user.credits}</Td>
                    <Td>
                      <button onClick={() => setSelectedUserId(user.id)}>
                        Send Credits
                      </button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={page === currentPage}
                >
                  {page}
                </button>
              ))}
            </Pagination>
          </>
        )}

        {/* Credit Transfer Form */}
        <CreditTransferForm>
          <h4>Transfer Credits to User</h4>
          {transferSuccess && <p style={{ color: 'green' }}>{transferSuccess}</p>}
          {transferError && <p style={{ color: 'red' }}>{transferError}</p>}
          <form onSubmit={handleTransfer}>
            <label>
              Amount:
              <input
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
              />
            </label>
            <button type="submit">Transfer Credits</button>
          </form>
        </CreditTransferForm>
      </Content>
    </DashboardContainer>
  );
};

export default AdminDashboard;