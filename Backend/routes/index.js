var express = require('express');
var router = express.Router();

router.get('/check', function (req, res, next) {
  setTimeout(function () {
    res.send({
      success: true,
      message: 'GET method API working properly',
    });
  }, 1000);
});

router.post('/check', function (req, res, next) {
  setTimeout(function () {
    res.send({
      success: true,
      message: 'POST method username ' + req.body.username,
    });
  }, 1000);
});

module.exports = router;
