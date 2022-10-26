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
router.get('/projects', indexController.displayProjectsPage);



/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact us */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
