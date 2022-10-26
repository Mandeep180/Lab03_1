let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to info model
let info = require('../models/info');

// get route for info list page - read operation

router.get('/',(req,res,next)=>{
    info.find((err,infoList)=>{
        if(err){
            return console.error(err);
        }
        else
        {
            res.render('info',{title:'Info List', InfoList:infoList});
        }
    });
});
module.exports = router;