const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/posts');
const homeRoute = require('./src/home');
const bodyParser = require('body-parser');


app.use(bodyParser.json());


app.use('/posts', postsRoute);

app.use('/', homeRoute);

mongoose.connect(
    "mongodb+srv://admin:admin1234@nodesample.zv6xa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
    () => 
    console.log("Connected to DB!")
);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Connected to PORT!!");
});