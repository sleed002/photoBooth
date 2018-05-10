const mongoose = require('mongoose');

const event = mongoose.model('event', {
  eventName: {
    type: String,
    required: true
  },
  creator: {
    type: String,
  },
  creationDate:{
    type: String,
    required: true
  },
  photos: Array
})


 module.exports = event;
