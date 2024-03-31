const express = require('express');
const { indexView, aboutView, addUserView, userDataView} = require('../controllers/userController');

//Create express router object
const router = express.Router();

//Handle URL's with get methods and point to page functions
router.get('/', indexView);
router.get('/about', aboutView);
router.get('/addUser', addUserView);
router.get('/userData', userDataView);

//Export router
module.exports = router;