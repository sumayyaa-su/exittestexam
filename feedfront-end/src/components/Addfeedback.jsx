import React, { useState } from 'react';
import { addFeedback } from '../components/Api';

const Addfeedback = ({ history }) => {
  const [formData, setFormData] = useState({
    courseName: '',
    feedbackComments: '',
    feedbackRating: 1,
    courseId: '',
    courseDuration: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFeedback(formData);
    history.push('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // styles
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(139, 223, 178, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '5px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    height: '120px',
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = buttonStyle.backgroundColor;
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Add Feedback</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <input
            type="text"
            name="courseName"
            placeholder="Course Name"
            value={formData.courseName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <textarea
            name="feedbackComments"
            placeholder="Feedback Comments"
            value={formData.feedbackComments}
            onChange={handleChange}
            style={textareaStyle}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <input
            type="number"
            name="feedbackRating"
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            value={formData.feedbackRating}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <input
            type="text"
            name="courseId"
            placeholder="Course ID"
            value={formData.courseId}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <input
            type="text"
            name="courseDuration"
            placeholder="Course Duration"
            value={formData.courseDuration}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Addfeedback;
