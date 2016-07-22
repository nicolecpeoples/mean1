var users = require('../controllers/users_server_controller.js')
var questions = require('../controllers/questions_server_controller.js')
var answers  = require('../controllers/answers_server_controller.js')

module.exports = function (app) {
//users controller
  app.get('/users', users.session),
  app.post('/users', users.create),

  app.get('/logout', users.logout),

//questions controller
  app.get('/questions', questions.index),
  app.post('/questions', questions.create),
  app.get('/questions/:id', questions.show),

//answers controller
  app.get('/answers/:id', answers.show),
  app.post('/answers', answers.create)
  

}
