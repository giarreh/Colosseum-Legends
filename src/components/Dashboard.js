import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      alert('Failed to log out', error)
    }
  }
  return (
    <>
    {currentUser && <button onClick={handleLogout}>Logout</button>}
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard</p>
      <p>{JSON.stringify(currentUser)}</p>
    </>
  )
}
