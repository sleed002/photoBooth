const mongoose = require('mongoose');

const event = mongoose.model('event', {
  eventName: {
    type: String,
    required: true
  },
  creator: {
    type: String,
  },
  members: {
    type: Array,
  },
  creationDate:{
    type: Date,
    required: true
  },
  photos: Array
})


 module.exports = event;
