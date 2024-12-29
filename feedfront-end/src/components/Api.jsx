

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';  

// Function to fetch all feedback
export const fetchFeedback = async () => {
  try {
    const response = await axios.get(`${user}/feedback`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return [];
  }
};

// Function to add feedback
export const addFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(`${user}/feedback`, feedbackData);
    return response.data; 
  } catch (error) {
    console.error("Error adding feedback:", error);
    return null;
  }
};

// Function to delete feedback
export const deleteFeedback = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/feedback/${id}`);
  } catch (error) {
    console.error("Error deleting feedback:", error);
  }
};
