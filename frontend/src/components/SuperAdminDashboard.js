import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  background-color: ${props => props.color || '#3b00a2'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${props => props.hoverColor || '#2a0075'};
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? '#3b00a2' : '#f4f4f4'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#3b00a2' : '#ddd'};
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const StatCard = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3b00a2;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
`;

const SuperAdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalEnrolled, setTotalEnrolled] = useState(0);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`/api/dashboard?page=${page}&search=${search}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUsers(response.data.users);
      setTotalPages(response.data.total_pages);
      setTotalEnrolled(response.data.users.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, search]);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/delete-user/${userId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleUpdate = async (userId) => {
    // Implement update functionality
    console.log(`Update user with ID: ${userId}`);
  };

  return (
    <DashboardContainer>
      <Title>Super Admin Dashboard</Title>
      <Stats>
        <StatCard>
          <StatNumber>{totalEnrolled}</StatNumber>
          <StatLabel>Total Enrolled Users</StatLabel>
        </StatCard>
        {/* Add more stat cards as needed */}
      </Stats>
      <SearchInput
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            <TableHeader>Full Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <ActionButton onClick={() => handleUpdate(user.id)}>Update</ActionButton>
                <ActionButton color="#ff4136" hoverColor="#d50000" onClick={() => handleDelete(user.id)}>Delete</ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton 
            key={index} 
            onClick={() => setPage(index + 1)}
            active={page === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
    </DashboardContainer>
  );
};

export default SuperAdminDashboard;
