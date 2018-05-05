const express = require('express');
const charRoutes = express.Router();

const mongoose = require('../db/mongoose');
const Character = require('../models/user');

charRoutes.use(express.static('static'));

charRoutes.post('/', (req, res)=>{
  let newCharacter = new Character({
    firstname: req.body.first,
    lastname: req.body.last,
    animal: req.body.animal,
    company: req.body.company,
    image: req.files.sampleFile
  });
  newCharacter.save().then((content)=> {
  // res.send(content) //- for postman checking
  res.redirect('/characters');
  }, (error) =>{
  res.status(400).send('400 Bad Request')
  });
});

// charRoutes.post('/', function(req, res) {
//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');
//
//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   let sampleFile = req.files.sampleFile;
//
//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv('Desktop/filename.jpg', function(err) {
//     if (err)
//       return res.status(500).send(err);
//
//     res.send('File uploaded!');
//   });
// });


charRoutes.get('/add', (req, res) => {
  res.render('add');
});

charRoutes.get('/', (req, res)=> {
  Character.find().then((characters)=> {
    res.render('characters', {
    characters: characters
  });
  }, (error) => {
    res.status(400).send('400 Bad Request')
  });
});

charRoutes.get('/:id', (req, res) => {
    const id = req.params.id
    Character.findById(id).then((character)=> {
      res.render('character', {
        character: character
      })
    }, (error) => {
      res.status(400).send('400 Bad Request')
    });
});

charRoutes.delete('/:id', (req, res) => {
  let id = req.params.id;
  Character.findByIdAndRemove(id).then((removedChar) => {
    res.redirect('/characters')
  }, (error) => {
    res.status(400).send('400 Bad Request');
  });
});

charRoutes.put('/:id', (req, res) => {
  let id = req.params.id;
  let updFirst = req.body.first;
  let updLast = req.body.last;
  let updAnimal = req.body.animal;
  let updCompany = req.body.company;
  Character.findByIdAndUpdate(id, {$set: {firstname: updFirst, lastname: updLast,
     animal: updAnimal, company: updCompany}}, {new: true}).then((updatedContent) => {
  res.render('character', {
    character: updatedContent
  });
  }, (error) => {
  res.status(400).send('400 Bad Request')
  });
});

module.exports = charRoutes;
