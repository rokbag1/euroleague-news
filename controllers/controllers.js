const Article = require('../models/models.js');
var azure_url = 'https://euroleaguenews.blob.core.windows.net/euroleaguenewsimages/';

// Create and Save a new Note
exports.create = (req, res) => {
  if (!req.body.articleContent && !req.body.articleTitle) {
    return res.status(400).send({
      message: "Article must have title/content"
    });
  }

  var blobFunction = require('../blobService');

  // Create a Note
  const article = new Article({
    articleTitle: req.body.articleTitle,
    articleContent: req.body.articleContent,
    articleImage: azure_url + blobFunction.blobFunction
  });

  article
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating article."
      });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Article.find()
    .then(article => {
      res.send(article);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving articles.'
      });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {};
