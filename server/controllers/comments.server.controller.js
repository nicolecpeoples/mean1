var Comment = mongoose.model('Comment')
module.exports = (function () {

  return {
    create: function (req, res) {
      console.log('here', req.body)
      var comment = new Comment(req.body)
      comment.save(function (err) {
        if (err) {
          res.status(400).send({
          message: getErrorMessage(err)
        })
        }else {
          res.json(comment);
        }
      })
    },
    getErrorMessage: function(err){
      if(err.errors){
        for(var errName in err.errors){
          if (err.errors[errName].message) return err.errors[errName].message;
        }
      }
      else {
        return 'Unknown server error';
      }
    }
  }
})()
