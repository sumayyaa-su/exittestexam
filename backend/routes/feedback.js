
const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// Create new feedback
router.post('/', async (req, res) => {
  const { courseName, feedbackComments, feedbackRating, courseId, courseDuration } = req.body;
  try {
    const newFeedback = new Feedback({ courseName, feedbackComments, feedbackRating, courseId, courseDuration });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ message: 'Error adding feedback', error: err });
  }
});

// Get all feedback
router.get('/', async (req, res) => {
  try {
    const feedbackList = await Feedback.find();
    res.status(200).json(feedbackList);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching feedback', error: err });
  }
});

// Update feedback
router.put('/:id', async (req, res) => {
  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFeedback);
  } catch (err) {
    res.status(400).json({ message: 'Error updating feedback', error: err });
  }
});

// Delete feedback
router.delete('/:id', async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting feedback', error: err });
  }
});

module.exports = router;
