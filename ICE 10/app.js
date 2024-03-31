const mongoose = require('mongoose');
const express = require('express');
const pug = require('pug');
require('dotenv').config();


//Configure Port
const PORT = process.env.PORT || 3000;
const username = process.env.username;
const password = process.env.password;

//Setup Routes
const routes = require('./routes/user.router');

//Initialize app method and routes
const app = express();
app.use('/', routes);

//Setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

//Start Server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

module.exports = {
    username,
    password,
    PORT
}