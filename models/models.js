const mongoose = require('mongoose');

const playersSchema = mongoose.Schema({
    articleTitle: String,
    articleContent: String,
    articleImage: String,
},{
    timestamps: true
});

module.exports = mongoose.model('Players', playersSchema);