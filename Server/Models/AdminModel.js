const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
role: 
{ 
  type: String,
  default: 'admin',
   },


createdAt: {
    type: Date,
    default: Date.now
},
First_name: {
    type: String,
    default: 'Admin',
  },
  
  name: {
    type: String,
    default: 'EstimaPro',

  },

  email: {
    type: String,
    required: true,
    unique: true,
    default: 'Admin@gmail.com',
  },

  password: {
    type: String,
    required: true, 
    default: 'Admin@gmail.com'
},

  profileUrl: {
    type: String,
  },
  
});


module.exports = mongoose.model('Admin', adminSchema);
