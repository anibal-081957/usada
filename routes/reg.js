var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
userSchema = new mongoose.Schema({
    email       : String,
    password    : String,
    completed: Boolean
});

Usuario = mongoose.model('usuario', userSchema);

/* GET home page. */
router.post('/', function(req, res, next) {
  var store = new Usuario({
      email: req.body.email,
      password: req.body.password
  });
  store.save().then(function(doc){
    res.send(doc);


  },function (err) {
      res.send('dio pau');
  });

});

module.exports = router;
