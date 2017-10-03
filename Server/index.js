var express=require('express');
var morgan=require('morgan');
var mongoose=require('mongoose');
var models=require('../database/index');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var port=process.env.PORT || 3000;


app.use(express.static(__dirname+'/../client/'))
app.use(morgan('dev'));

var session = require('express-session');

app.use(session({
	secret: 'shhh, it\'s a secret',
	resave:false,
	saveUninitialized: true 
}));

var comparePassword=function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
 }

var checkUser = function(req, res, next){
  if (!isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};
var createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('/');
    });
};

app.post('/add',function(req,res) {
	var hanan = JSON.parse(req.body)
console.log('hi');
console.log(hanan);
// res.send(hanan)
res.end()
})
app.get('/add',function(req,res) {
	var hanan = req.body
// console.log('hi');
// console.log(hanan);
res.send(hanan)

})

app.post('/login',function(req,res) {
	var username=JSON.parse(Object.keys(req.body)[0]).username;
	var password=JSON.parse(Object.keys(req.body)[0]).password;
	models.User.findOne({username:username},function(err,user){
		if(err){
			console.log(err);
		}else{
			if(!user){
				res.redirect('/');            //********************************
			}else{
				comparePassword(password,function(match){
					if (match){
						createSession(req, res, user)
					}else{
						res.redirect('/');
					}
				});
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
				console.log('this user already exist')
				app.get('/signup',function(req,res){
				res.end('<h1>this user already exist</h1>')

})
				res.redirect('/signup');

			}else{
				var newUser = {
					_id : new mongoose.Types.ObjectId(),
					username : username,
					password : password
				}
				models.User.create(newUser).then(function(){
					createSession(req,res,newUser);
				})
				app.get('/signup',function(req,res){
				res.end('<h1>this is work</h1>')

				res.redirect('/signup');

})
			}
		}
	})
})



app.listen(port,function(){
	console.log('conjScribers listeninig on port '+port);
})

 // var user=new User({
 // 	_id:1,
 // 	username:'Areej',
 // 	password:'wdf'
 // })

 // user.save(function(err,user){
 // 	if(err){
 // 		console.log(err);
 // 	}else{
 // 		console.log(user);
 // 	}
 // })