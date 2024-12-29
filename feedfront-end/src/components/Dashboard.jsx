
import React, { useEffect, useState } from 'react';
import { fetchFeedback, deleteFeedback } from './Api';

const Dashboard = ({ history }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFeedback();
      setFeedback(data);
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    await deleteFeedback(id);
    setFeedback(feedback.filter(item => item._id !== id));
  };

  //styles
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
    fontSize: '1rem',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '8px 16px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const updateButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049', 
  };

  const deleteButtonHoverStyle = {
    backgroundColor: '#d32f2f', 
  };

  const handleButtonHover = (e, style) => {
    e.target.style.backgroundColor = style;
  };

  const handleButtonLeave = (e, style) => {
    e.target.style.backgroundColor = style;
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Feedback Dashboard</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Course ID</th>
            <th style={thStyle}>Course Name</th>
            <th style={thStyle}>Course Duration</th>
            <th style={thStyle}>Rating</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map(item => (
            <tr key={item._id}>
              <td style={tdStyle}>{item.courseId}</td>
              <td style={tdStyle}>{item.courseName}</td>
              <td style={tdStyle}>{item.courseDuration}</td>
              <td style={tdStyle}>{item.feedbackRating}</td>
              <td style={tdStyle}>
                <button
                  style={updateButtonStyle}
                  onClick={() => history.push(`/update/${item._id}`)}
                  onMouseEnter={(e) => handleButtonHover(e, buttonHoverStyle.backgroundColor)}
                  onMouseLeave={(e) => handleButtonLeave(e, updateButtonStyle.backgroundColor)}
                >
                  Update
                </button>
                <button
                  style={deleteButtonStyle}
                  onClick={() => handleDelete(item._id)}
                  onMouseEnter={(e) => handleButtonHover(e, deleteButtonHoverStyle.backgroundColor)}
                  onMouseLeave={(e) => handleButtonLeave(e, deleteButtonStyle.backgroundColor)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
