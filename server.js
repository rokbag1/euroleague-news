//constants,
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');

//app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION, {
    useUnifiedTopology: true, 
    useNewUrlParser: true 

}).then(() => {
    console.log('Successfully connected to the database');  

}).catch(err => {
    console.log('Database can not be reached!');
    process.exit();
});

// listen for requests
require('./routes/routes.js')(app);
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

mongoose.connect(process.env.DATABASE_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
