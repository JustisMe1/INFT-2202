const express = require('express');
const pug = require('pug');
const PORT = 3000;

//Initialize method
const app = express();

//Setup template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get("/", function(req, res) {
    res.render("index", {
        title: "INFT 2202 - Working with Node and Pug",
        fName: "Justis",
    });
});

//open server listener to port 3000
app.listen(PORT, () =>{
    console.log('Server started on port ' + PORT.toString());
});