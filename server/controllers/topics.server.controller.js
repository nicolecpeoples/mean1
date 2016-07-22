var Topic = mongoose.model('Topic')
module.exports = (function () {

  return {
    index: function(req, res){
      Topic.find({}, function(err, topics){
        if(err){
          console.log('no matching topics')
        }
        res.json({topics})
      })
    },
    create: function (req, res) {
      console.log('here', req.body)
      var newTopic = new Topic(req.body)
      newTopic.save(function (err) {
        if (err) {
          res.json(err)
        }else {
          res.json(newTopic);
        }
      })
    },
    show: function(req, res) {
      Topic.findOne({ id: req.body._id}, function(err, topic){
        if (err) console.log('sorry, there are no matching topics');
        res.json(user);
      })
    }
  }
})()
