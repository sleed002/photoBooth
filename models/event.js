const mongoose = require('mongoose');
//this file contains the model for the database collection events
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
//photos will be strings sent to the photos array

 module.exports = event;
