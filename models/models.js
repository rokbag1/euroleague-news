const mongoose = require('mongoose');

const article = mongoose.Schema({
    articleTitle: String,
    articleContent: String,
    articleImage: String,
},{
    timestamps: true
});

module.exports = mongoose.model('Players', article);