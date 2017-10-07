var express=require('express');
var mongoose=require('mongoose');
var models=require('../database/index');


//Middleware
var morgan=require('morgan');
var bodyParser = require('body-parser');


var session = require('express-session');


var app=express();
var port=process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname+'/../client/')) //Serve the client files.
app.use(morgan('dev'));
app.use(session({
	secret: 'shhh, it\'s a secret',
	resave:false,
	saveUninitialized: true
}));



//Login Function used to recieve username and password from client and search for it in database.  
//Variable result used to manage the visibilty of login and sign up buttons , if it's true that`s mean login and signup buttons should be visible.
var result='true';
app.post('/login',function(req,res) {
	var username=JSON.parse(Object.keys(req.body)[0]).username;
	var password=JSON.parse(Object.keys(req.body)[0]).password;
	models.User.findOne({username:username},function(err,user){
		if(err){
			console.log(err);
		}else{
			if(!user){
				result='true';
				res.redirect('/');            
			}else{
				if(password===user.password){

					result='false';
					createSession(req,res,user);
				}else{
					res.redirect('/');
				}


			}
		}
	});
});



//SignUp function used to recieve username and password from the client and add it to database as new user.
app.post('/signup',function(req, res){
	var username=JSON.parse(Object.keys(req.body)[0]).username;
	var password=JSON.parse(Object.keys(req.body)[0]).password;
	models.User.findOne({username:username},function(err, user){
		if(err){
			console.log(err)
		}else{
			if(user){
				result='false';
				res.redirect('/');

			}else{
				var newUser = {
					_id : new mongoose.Types.ObjectId(),
					username : username,
					password : password
				}
				models.User.create(newUser).then(function(){
					result='true';
					createSession(req,res,newUser);

				})

			}
		}
	})
});


//Returns the result value to client 
app.get('/result',function (req,res) {
	res.end(result);
});


//Logout function destroys the open session.
app.post('/logout',function (req,res) {
	req.session.destroy(function() {
		result='true';
		res.redirect('/');
	});
});



//takes the item with it`s information and store it in the database.
app.post('/add',function(req,res){
	var data = JSON.parse(Object.keys(req.body)[0]);
	var n=data.name;
	var d=data.description;
	var p=data.price;
	var i=data.image;
	var newItem = {
		user: user._id,
		username:user.username,
		name:n,
		description:d,
		price:p,
		image:i
	}
	models.Item.create(newItem)
	res.redirect('/')
});

//Returns all the items to client side. 
app.get('/data',function(req,res){
	models.Item.find({},function(err,items){
		console.log(items);
		res.send(items)
	})
});



app.listen(port)


/////Helper function///
var user = ""; //store the current user in it 
var createSession = function(req, res, newUser) {
	return req.session.regenerate(function() {
		user = newUser;
		req.session.user = newUser;
		res.redirect('/');
	});
};