import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  overflow: hidden;
  position: relative;
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

const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  background: #4CAF50;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049;
  }
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  text-align: center;
  margin-top: 1rem;
`;

const AdminLogin = () => {
  const [stars, setStars] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 3 + 1
    }));
    setStars(newStars);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, { email, password });
      if (response.data.access_token) {
        localStorage.setItem('adminToken', response.data.access_token);
        navigate('/admin-dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleRegisterAdmin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/register-admin`, {
        fullname: 'Admin Name',
        email: email,
        password: password
      });
      if (response.status === 201) {
        alert('Admin created successfully');
        // After successful registration, automatically log in and navigate to admin dashboard
        const loginResponse = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, { email, password });
        if (loginResponse.data.access_token) {
          localStorage.setItem('adminToken', loginResponse.data.access_token);
          navigate('/admin-dashboard');
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to register admin. Please try again.');
      }
    }
  };

  return (
    <Container>
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
      <LoginForm onSubmit={handleSubmit}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Admin Login</h2>
        <Input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        <Button type="button" onClick={handleRegisterAdmin}>Register Admin</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginForm>
    </Container>
  );
};

export default AdminLogin;
