const { response } = require("express");
const bcrypt = require('bcrypt');
const {model} = require('mongoose');
const { User } = require("../models/user");
let saltRounds = 12;

/**
 * search database to see if username exists
 * @param {*} usernameToFind 
 * @returns 
 */
function userExists(usernameToFind) {
    // HINT use .find() with query selection
    
}

/**
 * renders home view
 * @param {*} req 
 * @param {*} res 
 */
exports.homeView = (req, res) => {
    res.render('home', {
        pageTitle: 'INFT 2202 - Home Page',
    })
}

/**
 * render the login page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: ''
    });
}

/**
 * render the login failure page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLoginFailure = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: 'Username/password combination does not exist. Please try again.'
    });
}

getLoginFailure = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: 'Username/password combination does not exist. Please try again.'
    });
}

/**
 * render the login success page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLoginSuccess = (req, res, next) => {
    res.render('login-success', {
        pageTitle: '',
        user: { username: req.body.username }
    });
}

getLoginSuccess = (req, res, next) => {
    res.render('login-success', {
        pageTitle: '',
        user: { username: req.body.username }
    });
}

/**
 * handle login form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postLogin = (req, res) => {
    let usernameEntry = req.body.username;
    let passwordEntry = req.body.password;
    // check to see if user pass combo exists
    // render either login-failure or login-success
    // TODO: check against DB instead of hardcoded values
    User.findOne({"username": usernameEntry}).then(function(user){
    if(user){
        bcrypt.compare("hashPassword", passwordEntry, function(err, result){
            if(err == null || result)
            {
                getLoginSuccess(req, res);
            }
            else
            {
                getLoginFailure(req, res);
            }
        });
    }else{
        getLoginFailure(req, res);
    }})

}


/**
 * render the register page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getRegister = (req, res, next) => {
    res.render('register', {
        pageTitle: 'Register a New Account',
        errorMessage: ''
    });
}

/**
 * handle register form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postRegister = (req, res) => {
    let usernameEntry = req.body.username;
    let passwordEntry = req.body.password;
    let errorMsg = "";

    User.findOne({"username": usernameEntry}).then(function(user){
        if(user)
        {
            res.render('register', {
                pageTitle: 'Register a New Account',
                errorMessage: 'Username Already in use! Please use another.'
            });
        }
        else
        {
            bcrypt.hash(passwordEntry, saltRounds, function(err, hashPass){
                if(err == null && hashPass)
                {
                    let userData = {
                        username: usernameEntry,
                        hashPassword: hashPass
                    }

                    let newUser = new User(userData);
                    newUser.save();
                    res.render('login', {
                        pageTitle: 'Login',
                        errorMessage: ''
                    });
                }
                else
                {
                    console.log(err, hashPass, passwordEntry);
                }
        });
}})}

module.exports = exports