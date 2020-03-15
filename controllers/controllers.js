const Player = require('../models/models.js');

// Create and Save a new Note
exports.create = (req, res) => {
  if (!req.body.articleContent && !req.body.articleTitle) {
    return res.status(400).send({
      message: 'Article must have title/content'
    });
  }

  // Create a Note
  const player = new Player({
    articleTitle: req.body.articleTitle, 
    articleContent: req.body.articleContent,
    articleImage: req.body.articleImage || 'no-image'  
  });

  player
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating article.'
      });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {};

// Find a single note with a noteId
exports.findOne = (req, res) => {};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {};
