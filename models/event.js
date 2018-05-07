const mongoose = require('mongoose');

const event = mongoose.model('event', {
  eventName: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  members: {
    type: Array,
  },
  creationDate:{
    type: Date,
    required: true
  }
})


 module.exports = event;
