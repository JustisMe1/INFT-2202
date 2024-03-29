console.log("xhr_script.js loaded");

// get the button for xhr
let btnXHR = $("#xhrJoke");

// create a url variable
let url_xhr = "https://icanhazdadjoke.com/";

// create a click callback that handles the API call
$(btnXHR).click(() => {
    // instantiate an XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // confiture with open()
    xhr.open("GET", url_xhr);

    // set the necessary headers for icanhazdadjoke.com
    xhr.setRequestHeader("Accept", "applcation/json");

    // create the callback to handle the onreadystatechange
    xhr.onreadystatechange = function () {
        // only execute when done and status is 200
        if(xhr.readyState === XMLHttpRequest.DONE && XMLHttpRequestEventTarget.status === 200){}
            // get the responseText
            let joke = xhr.responseText;

            // JSON.parse the joke
            let start = joke.search('<p class="subtitle">')
            joke = joke.substring(start, start + 200);
            let end = joke.search('</p>');
            joke = joke.substring(20,end);

            // console log
            console.log(joke);

            // set the output
            document.getElementById("output").textContent = joke;
    }
    xhr.send();
});