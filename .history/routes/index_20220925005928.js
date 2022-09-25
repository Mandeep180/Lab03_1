var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/homepage', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET About Me page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET About Me page. */
router.get('/myself', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});



/* GET Projects page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});



/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});



/* GET Contact us */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

/* GET Contact us */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
