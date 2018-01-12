/*
    A simple Express API server

    You may use this code as an example, but feel free to modify it to suit your own preferences.

    @Note: A lot of examples on the web use ES6/ES7 "arrow" function styles. For the purposes of clarity, this
           example is written using ES5 function styles. You may choose whichever you prefer.

           If you're using WebStorm, you will have to set the JavaScript Version to ES6 (in your preferences),
           as the default syntax will highlight as though there are errors.

           For the sake of simplicity, the passwords are stored as hardcoded values, in this file. Feel free to
           implement a properly secure password hashing and storage mechanism, if you so desire. I'd recommend
           looking at [Argon2](https://github.com/ranisalt/node-argon2) if you're interested in this sort of thing,
           though (just so we're clear), you may need to choose another library, to get it working.

*/

// Include and setup Express
const express = require('express');
const app = express();

// Use BodyParser middleware to handle POST values and JSON Bodies
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const memory = {
    users: {
        "joe@somedomain.com": "plaintextisbad"
    },
    authors: {
        "12345": {
            name: "J.R.R. Tolkien",
            books: [
                {
                    title: "The Hobbit",
                    publicationYear: 1937,
                    pages: ""
                }
            ]
        }
    }
};

app.get("/", function(response, request) {
   response.send("This is an example server.");
});

// List Books
app.get('/author/:authorID/books', listBooks);


app.listen(portNumber, "0.0.0.0", function() {
    console.log(`The example server is listening on port ${portNumber}. To access it, visit http://localhost:${portNumber}/ in your browser.`);
    console.log(`Please note that this server is bound to 0.0.0.0, so it should be accessible to addresses beyond this computer.`);
});

// Handle a POST login function
app.post("/users/login", login);


// ------ Hoistable Functions ------
function login(response, request) {

    // Check that username and password are specified
    var emailAddress = request.body.emailAddress;
    var password = request.body.password;

    if ((typeof(memory.users[emailAddress]) !== "undefined") && (memory.users[emailAddress] === password)) {

        // Log
        response.send(`${emailAddress} has been successfully authenticated.`);

    } else {

        response.status(401).send("User could not be authenticated.");
    }

}

// List books an author has written
function listBooks(response, request) {

    var authorID = request.params.authorID;

    return memory.authors[authorID].books
    
    
}