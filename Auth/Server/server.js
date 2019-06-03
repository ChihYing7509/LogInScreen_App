const express = require('express');
const app = express();
const mongoose = require('./db/mongoose')
const userRouters = require('./routes/user-routes');
const bodyParser = require('body-parser');
const private = require('./routes/private');

app.use(bodyParser.json());


app.use('/user', userRouters);
app.use('/private', private);

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    
});