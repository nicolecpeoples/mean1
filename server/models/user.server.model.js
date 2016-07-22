var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var UsersSchema = new mongoose.Schema({
  username: {type: String, required: true, minlength: 3, maxlength: 256, unique: true, trim: true},

  _topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],

  _messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],

  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  
}, {timestamps: true})


mongoose.model('User', UsersSchema)