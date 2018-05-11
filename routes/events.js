const express = require('express');
const eventRoutes = express.Router();
//to make and delete directories
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
//for the sockets
const io = require('../setup.js').io
//for the database
const mongoose = require('../db/mongoose');
const Event = require('../models/event');

//this is the main routes server on the back end where all events data routes to
eventRoutes.use(express.static('static'));
//the events post needs to date stamp the event
eventRoutes.post('/', (req, res)=>{
  let d = new Date;
  d = d.toString().split(' ');
  let today = d[1]+"/" + d[2]+"/" + d[3];
 //pass the user entries into the new event and save it to the database
  let creator = req.body.creator
  let newEvent = new Event({
    eventName: req.body.name,
    creator: creator,
    creationDate: today,
    photos: []
  });
  newEvent.save().then((content)=> {
  // res.send(content) //- for postman checking
  res.redirect('/events');
  }, (error) =>{
  res.status(400).send('400 Bad Request')
  });
});
//the events by ID route which allows for the photo upload to the database
eventRoutes.post('/:id', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
  //https://www.npmjs.com/package/express-fileupload
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  if (sampleFile===undefined) {
    return false; //if no file is selected do not allow upload to continue
  }
  if (sampleFile.name === 'image.jpg') {
    sampleFile.name = Math.floor(Math.random() * Math.floor(1000))+ ".jpg"
  } //for pics taken on my phone's 'take photo' function, all images are called
  //'image.jpg' and so each new upload would overwrite the previous.  I decided
  //to change the file name of these to a random number so that they remain unique
  let id = req.params.id;
  let creator = " " + req.body.member;
  mkdirp('static/Images/'+ id + "/", function(err) {
  }); //make a directory folder using each event ID
  // Use the mv() method to place the file in this folder
  let path = 'static/Images/'+ id + "/" + sampleFile.name
  let browserpath= "Images/"+ id + "/" + sampleFile.name
   sampleFile.mv(path, function(err) {
    if (err)
      return res.status(500).send(err);
        //add the photo to the database as a string
       let photoAdd = sampleFile.name;
       Event.findByIdAndUpdate(id, {$push: {photos: photoAdd}}, {new: true}).then((event) => {
       res.redirect(`/events/${event.id}`);
       //redirect to the events get and call the socket functionality to
       //immediately add the image without a refresh needed
       io.emit('image-upload',browserpath)
       }, (error) => {
       res.status(400).send('400 Bad Request')
       });
     });
  });
//the page to add an event only needs a get request
eventRoutes.get('/add', (req, res) => {
  res.render('add');
});
//the get request for looking at a singular photo
eventRoutes.get('/:id/:photo', (req, res) => {
  const id = req.params.id
  const photo = req.params.photo
  //get the photo name and the event ID to find the specific photo
  Event.findById(id).then((event)=> {
    res.render('photo', {
      photo: photo,
      event: event
    })
  }, (error) => {
    res.status(400).send('400 Bad Request')
  });
});
//the delete route for the photo if the user needs to delete it
eventRoutes.delete('/:id/:photo', (req, res) => {
  let id = req.params.id;
  let photo = req.params.photo;
  //delete the photo from its directory and the database
      Event.findByIdAndUpdate(id, {$pull: {photos: photo}}, {new: true}).then((event) => {
        res.redirect(`/events/${event.id}`);
        //https://stackoverflow.com/questions/18052762/remove-directory-which-is-not-empty
        rimraf('static/Images/'+ id + '/' + photo, function(err) {
            if (err)
            return res.status(500).send(err);
        }, (error) => {
          res.status(400).send('400 Bad Request')
        });
  });
});
//delete route to delete a whole event including all images uploaded from database and files
eventRoutes.delete('/:id', (req, res) => {
    let id = req.params.id;
    Event.findByIdAndRemove(id).then((removedevent) => {
    res.redirect('/events')
    rimraf('static/Images/'+ id, function(err) {
        if (err)
        return res.status(500).send(err);
     }, (error) => {
    res.status(400).send('400 Bad Request');
    });
  });
});
//the get request for events just sends all events to the events template
eventRoutes.get('/', (req, res)=> {
  Event.find().then((events)=> {
    res.render('events', {
    events: events
  });
  }, (error) => {
    res.status(400).send('400 Bad Request')
  });
});
//the get request for a specific event passes just that event into the event template
eventRoutes.get('/:id', (req, res) => {
    const id = req.params.id
    Event.findById(id).then((event)=> {
      res.render('event', {
        event: event
      })
    }, (error) => {
      res.status(400).send('400 Bad Request')
    });
});
//the update request for changes made to the info on the event page
eventRoutes.put('/:id', (req, res) => {
  let id = req.params.id;
  let updName= req.body.name;
  let updCreator= req.body.creator
  Event.findByIdAndUpdate(id, {$set: {eventName: updName, creator: updCreator}}, {new: true}).then((updatedContent) => {
  res.render('event', {
    event: updatedContent
  });
  }, (error) => {
  res.status(400).send('400 Bad Request')
  });
});
//export this for the server
module.exports = eventRoutes;
