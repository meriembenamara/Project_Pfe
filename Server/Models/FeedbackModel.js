const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  visible: {
    type: Boolean,
    default: false,
  },
  //email: {
    //type: String,
    //required: true
  //},
  comment: { type: String, required: true },
  stars: { type: Number, required: true },
  selectedStars: { type: Number, required: true },
  unselectedStars: { type: Number, required: true },
  visible: { type: Boolean, default: false },
  // Add other fields as necessary
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
