
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  feedbackComments: { type: String, required: true },
  feedbackRating: { type: Number, required: true },
  courseId: { type: String, required: true },
  courseDuration: { type: String, required: true }
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
