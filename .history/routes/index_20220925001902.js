var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About Myself' });
});

/* GET home page. */
router.get('/myself', function(req, res, next) {
  res.render('index', { title: 'About Myself' });
});

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET products page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
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
  res.render('index', { title: 'Contact us' });
});

/* GET Contact us */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact us' });
});

module.exports = router;
