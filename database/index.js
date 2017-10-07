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
