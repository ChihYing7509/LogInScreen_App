const mongoose = require('mongoose');
//const {databasePassword, databaseUsername} = require('../config');
mongoose,Promise = global.Promise;

mongoose
    .connect(`mongodb+srv://Irvine:irvine@cluster0-npuwf.mongodb.net/test?retryWrites=true&w=majority`,  { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err=> 
    console.log(err));

module.exports = mongoose;