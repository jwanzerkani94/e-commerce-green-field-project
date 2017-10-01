var express=require('express');
var morgan=require('morgan');
var mongoose=require('mongoose');
var db=require('../database');
var User=require('../database/index');
var Item=require('../database/index');

var port=process.env.PORT || 3000;
var app=express();

app.use(express.static(__dirname+'/../client/'))
app.use(morgan('dev'));

app.get('/',function(req,res) {
console.log('hi');
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