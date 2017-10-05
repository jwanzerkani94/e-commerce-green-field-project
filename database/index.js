var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var mongoDB= 'mongodb://greenfield:conj1234@ds163494.mlab.com:63494/greenfield';
mongoose.connect( mongoDB, { useMongoClient: true });



var userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	username: String,
	password: String,
	items: [{ type: Schema.Types.ObjectId, ref:'Item'}]
});

var itemSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref:'User'},
	username:String,
	name: String,
	description: String,
	price: Number,
	image: String
});

var db=mongoose.connection;
db.on('error',console.error.bind(console,' mongoDB connection error '));
db.once('open', function(){
	console.log('mongoDB connection open')
});

var User = mongoose.model('User',userSchema);
var Item = mongoose.model('Item',itemSchema);

module.exports={
	User:User,
	Item:Item
};
// module.exports=Item;

// var jwan=new User({
//  	_id:new mongoose.Types.ObjectId(),
//  	username:'Areej',
//  	password:'wdf',
//  	// items:[{name:'iphone',type:'apple',description:'dsfg',price:1000,image:'dgsfd'}]
//  })

//  jwan.save(function(err,jwan){
//  	if(err){
//  		console.log(err);
//  	}else{
//  		console.log(jwan);
//  	}
//  })

//  var item1=new Item({
//  	user: jwan._id,
//  	name:'iphone',
//  	type:'apple',
//  	description:'dsfg',
//  	price:1000,
//  	image:'dgsfd'
//  })
//  item1.save(function(err){
//  	if(err){
//  		console.log(err);
//  	}
//  })
