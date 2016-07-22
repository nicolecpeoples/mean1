var Question = mongoose.model('Question')
module.exports = (function () {

  return {
    index: function(req, res){
      Question.find({}).populate('_answers').exec(function(err, questions){
        if(err){
          console.log('no matching topics')
        }
        res.json({questions})
      })
    },
    create: function (req, res) {
      console.log('here', req.body)
      var question = new Question(req.body)
      question.save(function (err) {
        if (err) {
          res.json(err)
        }else {
          res.json(question);
        }
      })
    },
    show: function(req, res) {
      console.log('i am in questions server')
      console.log(req.body)

      Question.findOne({_id: req.params.id}).populate('_answers').exec(function(err, question){
      if(err){
        res.json({errors: err});
      }
      else{
        res.json(question);
      }
    })
    }
  }
})()
