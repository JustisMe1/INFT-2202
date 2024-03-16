const express = require("express");
var exphbs = require("express-handlebars");

const PORT = 3000;
const app = express(); //initialize method

//Setup template engine
app.engine("handlebars", exphbs.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set('views', './views');

//Setup app.use
app.use((req, res, next) => {
    console.log('URL: ${req.url}');
    req.myName = "Justis McGill";
    next();
});

//home page
app.get('/', (req, res) => {
    res.render("home", {
        title: "Home for INFT 2202 Node101 with Handlebars"
    });
});

//about page
app.get('/about', (req, res) => {
    res.render("about", {
        aboutTitle: "This is my about page."
    });
})

//open server listener to port 3000
app.listen(PORT, () =>{
    console.log('Server started on port ' + PORT.toString());
});