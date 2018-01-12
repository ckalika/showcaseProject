# Technical Skills Demonstration

The purpose of this project is to demonstrate technical skills with a set of modern technologies including [Node.js](https://www.nodejs.org/), [PhoneGap](https://phonegap.com/)/[Cordova](https://cordova.apache.org/), [jQuery](https://www.jquery.com/), the [Express](https://expressjs.com/) server framework for Node.js, and [Git(Hub)](https://www.github.com/), for version control.

In this project, you will develop the basis for a small e-reader application in which there are users, books, collections (of books), and authors. You will be given a set amount of time within which to build this project, and will be asked to demonstrate it, and explain your development/decision making process, so that we can better understand your technical abilities.

You will develop a set of screens, in your mobile app, for adding, updating, and deleting books, uploading a file (which represents the actual ebook, itself), and being able to view that file (an image or text file will suffice). You can extend the functionality, as you'd like, so long as these requirements are met.

A user of this application may have multiple collections (1:m). A collection may have many books (1:m). Books may belong to more than one collection (m:n). A book has one or more authors (1:m), and conversely, an author is associated to one or more books (1:m).

In order to support this functionality, you will also develop APIs, using the example server as a model.

## Objective

Work through this project, to the best of your abilities, and learn something along the way. If you get stuck, feel free to ask questions, through appropriate channels. If you can't bring the project to completion, do as much as you can, and we'll review it at the demonstration. Our goal, with this project, is for you to be able to showcase your abilities by allowing you to develop within your own space, with technologies that you might not be entirely comfortable with, at this point. It's a learning experience, so have fun with it. :)


## Components

There are two components to this project: A mobile application that runs on your device (Android or iOS) and a server that handles API requests from the device.

### Mobile Application

The mobile application for this project will be built upon [Apache Cordova](https://cordova.apache.org/). Adobe created a wrapper around Cordova called [PhoneGap](https://phonegap.com/), so you may find tutorials, resources, plugins and the like, that use either name (almost) interchangeably.

If you are comfortable doing native development, you can choose to develop a native iOS or Android app (as per your preferences), instead of using Cordova/PhoneGap. Otherwise, please proceed with Cordova.

To help you move forward quickly, a set of tutorials and resources have been added to a list below. If you find others that are useful, please let us know, so we can add them for future use.

If you do not have a mobile device that you can use, in this way, we will accept a browser-based equivalent.


### API Server
An example of the API server is available in the [server/](./server) directory of this project. To run it, first install Node.js, and then run the following:

```bash
# Change into the appropriate directory
cd server
 
# This will install the required Node.js modules that are defined in package.json
$ npm install
 

# This will run your application
$ node api-server.js
The example server is listening on port 3001. To access it, visit http://localhost:3001/ in your browser.
Please note that this server is bound to 0.0.0.0, so it should be accessible to addresses beyond this computer.

```

Please note that this is simply meant as an example, to get you moving. Feel free to do the same thing in another language or with another framework. The organisation and architecture of your API is what's important here, not the specific language choice. We will discuss the details of how you worked through it, at the demonstration.


## Tutorials to get you started


#### Node.js
- [Express/Node Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Node Beginner (Free online book)](https://www.nodebeginner.org/)
- [Introduction to Node.js and Express](https://medium.com/javascript-scene/introduction-to-node-express-90c431f9e6fd)

#### Express
- [Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
- [Error Handling](https://expressjs.com/en/guide/error-handling.html)
- [Middleware](https://expressjs.com/en/guide/using-middleware.html)


#### Cordova
- [Getting Started](https://cordova.apache.org/#getstarted)
- [Create Your First App](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)

#### jQuery
- [Intro to jQuery](https://www.teaching-materials.org/jquery/#/)