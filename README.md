<p align="center"><a href="https://nodejs.org/en/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="400"></a></p>

The project **Livres** is created during Metz-Numeric-Shcool training by [Taj Nyazi](https://estracode.com) using NodeJS with native Javacript (OOP). This project provieds a CRUD system allowing to stores books in MongoDB.

# Livres

This CRUD system is initially started using node.js and some other necessary web features. All are listed below for Frontend and Backend :

## Frontend

  - Native Javascript
  - DOM manipulation
  - Event management
  - [Modules, export and import](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules)
  - [Javascript Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)
  - [Getters](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/get) and [Setters](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/set)
  - HTTP request using Fetch
  - [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
  - Form Validation (Not done yet)

## Backend

  - [Node.js](https://nodejs.org/en/)
  - [Express](https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - **/server/data/livres.json** file has the initial Books list.


## All the steps:

Starting the project:
  - npm init

Running the app on **http://localhost:3001/**:
  - node server

In order to restart the server automatically with any changes in the project files are made, I installed **Nodemon**:
  - npm install -g nodemon
  - OR npm install nodemon
  - nodemon server/index

