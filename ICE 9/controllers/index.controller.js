/**
 * render index.pug view
 * @param {*} req 
 * @param {*} res 
 */
function homeView(req, res) {
   // render index.pug in views
    res.render('../views/pages/home', {
        title: "INFT2202 Node101 - MVC101 with Pug templates",
        message: "Welcome to my site.",
        homePageParagraph: "Here is something interesting about my site.",
        showGreenHeader: true
    });
}

/**
 * render about.pug view
 * @param {*} req 
 * @param {*} res 
 */
function aboutView(req, res) {
    // render index.pug in views
     res.render('../views/pages/about', {
         title: "INFT2202 Node101 - MVC101 with Pug templates",
         message: "About US.",
     });
 }

// Export the controller function
module.exports = {
    homeView,
    aboutView
};