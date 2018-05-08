const express = require('express');
const eventRoutes = express.Router();
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const io = require('../setup.js').io

const mongoose = require('../db/mongoose');
const Event = require('../models/event');

eventRoutes.use(express.static('static'));

eventRoutes.post('/', (req, res)=>{
  let today = new Date;
  let creator = req.body.creator
  let newEvent = new Event({
    eventName: req.body.name,
    creator: creator,
    creationDate: today,
    members: [creator],
    photos: []
  });
  newEvent.save().then((content)=> {
  // res.send(content) //- for postman checking
  res.redirect('/events');
  }, (error) =>{
  res.status(400).send('400 Bad Request')
  });
});

eventRoutes.post('/:id', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  if (sampleFile===undefined) {
    return false;
  }

  let id = req.params.id;
  let creator = " " + req.body.member;
  mkdirp('static/Images/'+ id + "/", function(err) {
    });
  // Use the mv() method to place the file somewhere on your server
  let path = 'static/Images/'+ id + "/" + sampleFile.name
  let browserpath= "Images/"+ id + "/" + sampleFile.name
   sampleFile.mv(path, function(err) {
    if (err)
      return res.status(500).send(err);

       let photoAdd = sampleFile.name;
       Event.findByIdAndUpdate(id, {$push: {photos: photoAdd, members: creator}}, {new: true}).then((event) => {
       res.redirect(`/events/${event.id}`);
       io.emit('image-upload', creator, browserpath)
       }, (error) => {
       res.status(400).send('400 Bad Request')
       });
     });
  });

eventRoutes.get('/add', (req, res) => {
  res.render('add');
});

eventRoutes.get('/:id/:photo', (req, res) => {
  const id = req.params.id
  const photo = req.params.photo

  Event.findById(id).then((event)=> {
    res.render('photo', {
      photo: photo,
      event: event
    })
  }, (error) => {
    res.status(400).send('400 Bad Request')
  });
});

eventRoutes.delete('/:id:photo', (req, res) => {
  let id = req.params.id;
  let photo = req.params.photo;
  Event.findById(id).then((event) => {
    // event.photos.forEach(img) {
    //   if (img === photo) {
    //     delete from array
    //   }
    //
    // }
    res.redirect('/events')
    rimraf('static/Images/'+ id + photo, function(err) {
        if (err)
        return res.status(500).send(err);
     }, (error) => {
    res.status(400).send('400 Bad Request');
    });
  });
});

eventRoutes.get('/', (req, res)=> {
  Event.find().then((events)=> {
    res.render('events', {
    events: events
  });
  }, (error) => {
    res.status(400).send('400 Bad Request')
  });
});

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

module.exports = eventRoutes;
