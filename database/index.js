var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongoPAth = 'mongodb://127.0.0.1/greenfield';
mongoose.connect(mongoPAth);

mongoose.connection.once('open',function(){
	console.log('connected to database');
}).on('error',function(error){
	console.log('Connection error:',error);
});


var userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	username: String,
	password: String,
	items: [{ type: Schema.Types.ObjectId, ref:'Item'}]
});

var itemSchema = new Schema({
	username: { type: Schema.Types.ObjectId, ref:'User'},
	name: String,
	type: String,
	description: String,
	price: Number,
	image: String
});

var User = mongoose.model('User',userSchema);
var Item = mongoose.model('Item',itemSchema);

module.exports=User;
// module.exports=Item;