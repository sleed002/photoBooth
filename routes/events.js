const express = require('express');
const eventRoutes = express.Router();
const dateformat = require('dateformat');
var mkdirp = require('mkdirp');

const mongoose = require('../db/mongoose');
const Event = require('../models/event');

eventRoutes.use(express.static('static'));

eventRoutes.post('/', (req, res)=>{
  let today = new Date;
  let newEvent = new Event({
    eventName: req.body.name,
    creator: 'sleed002',
    creationDate: dateformat(today, 'dd, mm, yy'),
    members: ['sleed002', 'dsleep002'],
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
  let id = req.params.id;
  mkdirp('static/Images/'+ id + "/", function(err) {
    });
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('static/Images/'+ id + "/" + sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);

       res.send('File uploaded!');
       let photoAdd = 'Images/'+ sampleFile.name
       Event.findByIdAndUpdate(id, {$set: {photos: photoAdd}}, {new: true}).then((event) => {
              console.log(event)
       res.render('event', {
         event: event
       });
       }, (error) => {
       res.status(400).send('400 Bad Request')
       });
     });
  });



eventRoutes.get('/add', (req, res) => {
  res.render('add');
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
  }, (error) => {
    res.status(400).send('400 Bad Request');
  });
});

eventRoutes.put('/:id', (req, res) => {
  let id = req.params.id;
  let updName= req.body.name;
  Event.findByIdAndUpdate(id, {$set: {eventName: updName}}, {new: true}).then((updatedContent) => {
  res.render('event', {
    event: updatedContent
  });
  }, (error) => {
  res.status(400).send('400 Bad Request')
  });
});

module.exports = eventRoutes;
