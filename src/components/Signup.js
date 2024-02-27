import React, { useState } from 'react';
import './Signup.css'; // Import CSS file for styling
import { useAuth } from '../contexts/AuthContext';


function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const {signup} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  async function handleSubmit(e){
    e.preventDefault();

    if(formData.username.length < 3) {
      alert('Username must be at least 3 characters long');
      return;
    }

    if(formData.username.includes(' ')) {
      alert('Username cannot contain spaces');
      return;
    }

    if(/[^a-zA-Z0-9]/.test(formData.username)) {
      alert('Username cannot contain special characters');
      return;
    }

    if(formData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    if(formData.password === formData.username) {
      alert('Password must be different from username');
      return;
    }

    // Here you can send the form data to your backend for processing
    try {
      setLoading(true);
      await signup(formData.email, formData.password);
    } catch (err) {
      alert(err)
    }
    setLoading(false);
    console.log('Form submitted with data:', formData);
    // You may also want to clear the form fields after submission
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
