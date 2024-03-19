import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    feedback_type: '',
    description: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/gym/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || 'Failed to submit feedback');
      }
      setSuccessMessage('Feedback submitted successfully');
      setErrorMessage('');
      setFormData({
        name: '',
        roll: '',
        feedback_type: '',
        description: ''
      });
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.message || 'Failed to submit feedback');
    }
  };

  return (
    <div className="form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="text" name="roll" value={formData.roll} onChange={handleChange} required placeholder="Roll No." />
        </div>
        <div className="form-group">
          <select name="feedback_type" value={formData.feedback_type} onChange={handleChange} required>
            <option value="" disabled>Select Form Type</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
            <option value="appreciation">Appreciation</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-group-message">
          <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="Message" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {successMessage && <div className="success">{successMessage}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Form;