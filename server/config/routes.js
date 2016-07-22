var users = require('../controllers/users.server.controller.js')
var topics = require('../controllers/topics.server.controller.js')
var messages  = require('../controllers/messages.server.controller.js')
var comments = require('../controllers/comments.server.controller.js')

module.exports = function (app) {
//users controller
  app.get('/users', users.session),
  app.post('/users', users.create),

  app.get('/logout', users.logout),

//topics controller
  app.get('/topics', topics.index),
  app.post('/topics', topics.create),

  // app.get('/session', users.session),
  // app.get('/messages', messages.index),
  // app.post('/messages', messages.create),
  // app.get('/comments', comments.index),
  app.post('/comment', comments.create)

}
