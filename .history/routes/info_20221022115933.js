let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to info model
let Info = require('../models/info');

// get route for info list page - read operation

router.get('/',(req,res,next)=>{
    Info.find((err,InfoList)=>{
        if(err){
            return console.error(err);
        }
        else
        {
            console.log(InfoList);
        }
    });
});
module.exports = router;