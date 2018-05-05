const mongoose = require('mongoose');

const Character = mongoose.model('Character', {
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: false
  },
  animal: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
 })


 module.exports = Character;
