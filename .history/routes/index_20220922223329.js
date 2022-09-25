var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Intro to Express COMP 229', desc:'description', h1: 'Main heading' });
});

module.exports = router;
