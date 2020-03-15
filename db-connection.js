require('dotenv/config');

// connect to euro-news database.
var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

      // // define Schema
      // var BookSchema = mongoose.Schema({
      //   name: String,
      //   skills: String,
      //   team: String
      // });
   
      // // compile schema to model
      // var Book = mongoose.model('Players', BookSchema, 'players');
   
      // // a document instance
      // var book1 = new Book({ name: 'Javtokas', skills: "wooden", team: "Žalgiris" });
   
      // // save model to database
      // book1.save(function (err, book) {
      //   if (err) return console.error(err);
      //   console.log(book.name + " saved to bookstore collection.");
      // });

});