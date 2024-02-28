import React, { useState } from 'react';
import './Signup.css'; // Import CSS file for styling
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';


function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const { forgotpassword } = useAuth();

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
      await forgotpassword(formData.email);
    } catch (err) {
      alert(err)
    }
    setLoading(false);
    console.log('Form submitted with data:', formData);
    // You may also want to clear the form fields after submission
    setFormData({
      email: '',
    });
  };

  return (
    <div className="signup-container">
      <h2>Reset your password</h2>
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
        <button type="submit" disabled={loading}>Reset</button>
      </form>
      <div>Already a user? <Link to="/login">Login!</Link></div>
      <div>New user? <Link to="/signup">Sign up</Link></div>
    </div>
  );
}

export default ForgotPassword;
