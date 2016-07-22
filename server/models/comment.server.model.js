var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({

 comment: { type: String, minlength: 4},

 _message: { type: Schema.Types.ObjectId, ref: 'Message'},

 _author: { type: Schema.Types.ObjectId, ref: 'User'},


}, { timestamps: true });


mongoose.model('Comment', commentSchema)