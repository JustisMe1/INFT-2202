console.log("formValidation.js loaded");
form.addEventListener("submit", validateForm);

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
}


//TODO:
// Make all fields required (HTML) - Done
// Add a pattern attribute in the telephone element (HTML) - Done
// Ensure the password is redacted into dots on screen when typed in (HTML) - Done
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
/*
 * Validate the username using a regular expression
 * @param {string} username
 * @returns {boolean} - Validation result
 */
function validateUsername(username){
    // Regular expression for validating the username
    // Note: Feel free to replace this with a more suitable regex
    var usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;

    if (username.match(usernameRegex)) {
        return true;
    }
    else {

        // Update #generalError with an error message and highlighting
        var generalError = document.getElementById('generalError');
        generalError.innerHTML = 'Invalid username. Please use7-29 characters (letters, numbers, and underscores).';
        generalError.style.backgroundColor = 'red';
        return false;
    }
}
// Validate the username when the form is submitted
function validateForm() {
    // Get the username from the form
    var username = document.getElementById('username').value;

    // Validate the username
    if (validateUsername(username))
    {
        // Clear any additional error message and highlighting when the form is reset
        var generalError = document.getElementById('generalError');
        generalError.innerHTML = '';
        generalError.style.backgroundColor = '';

        // Continue with form submission
        return true;
    }
    else
    {
        return false;
    }
}