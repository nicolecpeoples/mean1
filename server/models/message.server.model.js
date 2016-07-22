var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({

 message: { type: String, required: true, minlength: 10},

 _topics: { type: Schema.Types.ObjectId, ref: 'Topic'}, 

 _author: { type: Schema.Types.ObjectId, ref: 'User'},

 _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]

}, { timestamps: true });


mongoose.model('Message', messageSchema)