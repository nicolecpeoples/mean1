var Answer = mongoose.model('Answer')
module.exports = (function () {

  return {
    show: function(req, res) {
      console.log(req.body.id)
      Answer.find({ _question: { _id: req.body.id}}).populate('_question _user').exec(function(err, answer){
        if (err) console.log('sorry, there are no matching questions');
        res.json(answer);
        console.log(answer)
      })
    },
    create: function (req, res) {
      console.log('in answer server controller', req.body)
      var answer = new Answer(req.body)
      answer.save(function (err) {
        if (err) {
          res.json(err)
        }else {
          res.json(answer);
        }
      })
    }
  }
})()
