var express=require('express');
var morgan=require('morgan');
var mongoose=require('mongoose');
var db=require('../database');
var User=require('../database/index');
var Item=require('../database/index');
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var port=process.env.PORT || 3000;


app.use(express.static(__dirname+'/../client/'))
app.use(morgan('dev'));

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

})-

app.post('/login',function(req,res) {
	var username=JSON.parse(Object.keys(req.body)[0]).username;
	var password=JSON.parse(Object.keys(req.body)[0]).password;
	console.log ("username ",username,"  password ",password);
console.log('hi2000');
;
res.end()
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