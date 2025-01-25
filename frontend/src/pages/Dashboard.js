import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    tasksCompleted: 0,
    messages: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const authToken = localStorage.getItem('auth_token');
    
    if (!authToken) {
      // If no token, redirect to login
      navigate('/login');
    } else {
      // Fetch dashboard stats from the backend
      fetchDashboardStats(authToken);
      fetchRecentActivity(authToken);
    }
  }, [navigate]);

  // Fetch dashboard statistics from the backend
  const fetchDashboardStats = async (token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/dashboard-stats`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats({
          totalUsers: data.totalUsers,
          tasksCompleted: data.tasksCompleted,
          messages: data.messages,
        });
      } else {
        console.log('Failed to fetch stats');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Fetch recent activity from the backend
  const fetchRecentActivity = async (token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/recent-activity`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRecentActivity(data.activities);
      } else {
        console.log('Failed to fetch recent activity');
      }
    } catch (error) {
      console.error('Error fetching recent activity:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard Menu</h2>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/reports">Reports</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>

      <div className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>
        <div className="stats">
          <div className="stat-box">
            <h3>Total Users</h3>
            <p>{stats.totalUsers}</p>
          </div>
          <div className="stat-box">
            <h3>Tasks Completed</h3>
            <p>{stats.tasksCompleted}</p>
          </div>
          <div className="stat-box">
            <h3>Messages</h3>
            <p>{stats.messages}</p>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            {recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
