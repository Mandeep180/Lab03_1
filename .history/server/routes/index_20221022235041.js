let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
/*Mandeep Kaur 301225713*/
/* GET home page. */
router.get('/', indexController.displayHomePage);


/* GET home page. */
router.get('/home', indexController.displayHomePage);


/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);


/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});



/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


/* GET Contact us */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
