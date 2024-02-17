console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
var xhr = new XMLHttpRequest();

// create a callback function to fire when the onreadystatechange happens
xhr.onreadystatechange = function() {
    // check that the state is done
    if (xhr.readyState === xhr.DONE){
        try {
            var responseData = JSON.parse(xhr.responseText);
            // console log to see what we have
            console.log(responseData);
            //get first image/caption and new image elements
            var firstImage = document.getElementById('photo1');
            var firstFigcaption = document.getElementById('caption1');
            firstImgSrc = responseData[30].url;

            // update the 1st image and the 1st figcaption
            firstImage.setAttribute("src", firstImgSrc);
            firstFigcaption.textContent = responseData[1].title;

            // get second image/caption and new image elements
            var secondImage = document.getElementById('photo2');
            var secondFigcaption = document.getElementById('caption2');
            secondImgSrc = responseData[20].url;

            // update the 2nd image and the 2nd figcaption
            secondImage.src = secondImgSrc;
            secondFigcaption.textContent = responseData[2].title;
        } catch (error) {
            console.log('Error parsing JSON: ' + error.message);
        }
    }
};

// use the .open() method to configure the object
xhr.open('GET', url_photos);

// add datatype to header
xhr.setRequestHeader('Content-Type', 'application/json');

// use the .send() method to send the request
xhr.send()
