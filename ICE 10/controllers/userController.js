// Import user model
const userModel = require('../models/user');

/**
 * render index.pug view
 * @param {*} req 
 * @param {*} res 
**/
function indexView(req, res) {
    // render index.pug in views
    res.render('../views/index', {
        pageTitle: "Home Page",
        title: "Home Page",
        message: "Welcome to our home page!!!"
    });
}
 
/**
 * render about.pug view
 * @param {*} req 
 * @param {*} res 
**/
function aboutView(req, res) {
    // render about.pug in views
    res.render('../views/about', {
        pageTitle: "About Us",
        message: "Welcome to our about us page!!!"
    });
}

/**
 * render form.pug view
 * @param {*} req 
 * @param {*} res 
**/
function addUserView(req, res) {
    // render form.pug in views
    res.render('../views/addUser', {
        pageTitle: "Add User",
        message: "Here you can create a new user by filling out the form below:"
    });
}

/**
 * render userData.pug view (formSuccess)
 * @param {*} req 
 * @param {*} res 
**/
function userDataView(req, res) {
    userModel.User.find({}).then(function(userList) {
        console.log(userList);
        res.render('./layouts/userData', {
            pageTitle: 'User Data Page',
            message: 'Welcome to our User Data Page!!!',
            users: userList
        });
    });
}
 
// Export the controller function
module.exports = {
    indexView,
    aboutView,
    addUserView,
    userDataView
};
