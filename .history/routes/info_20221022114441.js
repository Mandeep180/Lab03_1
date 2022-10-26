let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to info model
let info = require('../models/info');

// get route for info list page - read operation

router.get('/',(_req,res,next)=>{
    info.find((err,info)=>{
        if(err){
            return console.error(err);
        }
        else
        {
            res.render('info ',{title:'Info ', info:info});
        }
    });
});
module.exports = router;