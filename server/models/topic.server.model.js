var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopicsSchema = new mongoose.Schema({

 topic: { type: String, required: true, minlength: 2}, 

 description: { type: String, required: true, minlength: 2},

 category: { type: String }, 
 
 _author: { type: Schema.Types.ObjectId, ref: 'User'},

 _messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]

}, { timestamps: true });


mongoose.model('Topic', TopicsSchema)
