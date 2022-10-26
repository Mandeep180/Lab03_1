let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to info model
let Infor = require('../models/infor');
let inforController = require('../controllers/infor');

// get route for info list page - read operation
router.get('/', inforController.displayInforList);

// get route for displaying info add page - create operation
router.get('/add',inforController.displayAddPage);

//get route for displaying info process add page - create operation
router.post('/add',inforController.processAddPage);

// get route for displaying info edit page - create operation
router.get('/edit/:id',inforController.displayEditPage);

// post route for displaying info edit page - create operation
router.post('/edit/:id', inforController.processEditPage);

// get to perform deletion - delete operation
router.get('/delete/:id', inforController.performDelete);
module.exports = router;