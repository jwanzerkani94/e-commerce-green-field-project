var express=require('express');
var morgan=require('morgan');
var mongoose=require('mongoose');
var models=require('../database/index');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
// var errorHandler = require('errorhandler')

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var port=process.env.PORT || 5555;


app.use(express.static(__dirname+'/../client/'))
app.use(morgan('dev'));

var session = require('express-session');

app.use(session({
	secret: 'shhh, it\'s a secret',
	resave:false,
	saveUninitialized: true
}));

var user = "";
var createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
  	  user = newUser;
      req.session.user = newUser;
      res.redirect('/');
    });
};
app.get('/login', function(req,res){
	res.redirect('/')
})
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
				res.redirect('/');            //********************************
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

app.post('/signup',function(req, res){
	var username=JSON.parse(Object.keys(req.body)[0]).username;
	var password=JSON.parse(Object.keys(req.body)[0]).password;
	console.log(username)
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
app.get('/result',function (req,res) {
	res.end(result);
})
app.post('/logout',function (req,res) {
	req.session.destroy(function() {
		result='true';
    res.redirect('/');
  });
});
app.post('/add',function(req,res){
	var data = JSON.parse(Object.keys(req.body)[0]);
	var n=data.name;
	var d=data.description;
	var p=data.price;
	var i=data.image;
	console.log(user._id,data.name,data.description,data.price,data.image)
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
})
app.get('/data',function(req,res){
	models.Item.find({},function(err,items){
     console.log(items);
     res.send(items)
	})
})
app.listen(port)
