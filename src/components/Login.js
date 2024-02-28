import React, { useState } from 'react';
import './Signup.css'; // Import CSS file for styling
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  async function handleSubmit(e){
    e.preventDefault();

    // Here you can send the form data to your backend for processing
    try {
      setLoading(true);
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      alert(err)
    }
    setLoading(false);
    console.log('Form submitted with data:', formData);
    // You may also want to clear the form fields after submission
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>Login</button>
      </form>
      <div>Forgotten your password? <Link to="/forgot-password">Reset your password</Link></div>
      <div>New user? <Link to="/signup">Sign up</Link></div>
    </div>
  );
}

export default Login;
