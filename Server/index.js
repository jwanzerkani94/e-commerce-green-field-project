var express=require('express');
var morgan=require('morgan');
var port=process.env.PORT || 3000;
var app=express();

// app.use(express.static(__dirname+/*client*/))
app.use(morgan('dev'));

app.get('/',function(req,res) {
	res.send('hi');
})


app.listen(port,function(){
	console.log('conjScribers listeninig on port '+port);
})