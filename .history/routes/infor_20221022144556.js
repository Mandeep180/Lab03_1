let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to info model
let Infor = require('../models/info');

// get route for info list page - read operation

router.get('/',(req,res,next)=>{
    Infor.find((err,InforList)=>{
        if(err){
            return console.error(err);
        }
        else
        {
            console.log(InforList);
        }
    });
});
module.exports = router;