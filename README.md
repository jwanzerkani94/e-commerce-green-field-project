#E-commerce Green Field project


Live Demo: <--..--> not yet

####About E-commerce is a full-stack MEAN (MongoDB, Express.js, Angular.js, Node.js) app that allows users to sign up for an account and browse   items to their account.


####Summary On the frontend, a custom Angular.js component service allows the e-commerce controller to make AJAX requests to the app's API endpoints. The app uses Angular's $routeProvider to serve partial html views according to defined URL routes, and ngRepeat is used to render maketing items. ngShow provides a simple method of conditionally showing/hiding elements in the navbar depending on whether there to the authentication issues and what allow to all users and what allowed to authorized ones.

A normalized data structure with two separate MongoDB collections are used to store User accounts (username with password ) and items. Each item  stores a reference to the User ID that the item belongs to. A MongoDB search on the items collection, by user ID, ensures that each user only sees addes item they own.

authentiction process is used to authenticate users and create a session which is stored as a cookie, and the attaches req.user when a user is logged into a session. req.user is attached to the window object as window.user to allow Angular.js to conditionally show/hide elements, like a Logout link, if the user is logged in.



####Built With the Following Technologies/Tools:

Node.js (Express)
Angular.js
MongoDB (Mongoose)
Bootstrap 3
Grunt <--..--> not yet
Postman
Robu mongo
As middle ware:
  Morgan 
  Error handler 
  Body parser

##To Run an Instance of this App (Currently in Development!)

Create config/env/development.js
var port = 3000;

module.exports = {
  port: port,
  db: 'mongodb://localhost/E-commerce',
};
Run npm install to install frontend dependencies
Run npm install to install backend dependencies
Start the server with node index.js (Default: http://localhost:3000)
