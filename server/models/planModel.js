const mongoose= require("mongoose"); 
const { Schema } = mongoose;

const Plan = new Schema({
  imageUrl: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  }
  
  });
  
  module.exports = mongoose.model('Plan', Plan);