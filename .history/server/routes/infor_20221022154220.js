let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to info model
let Infor = require('../models/infor');

// get route for info list page - read operation

router.get('/',(req,res,next)=>{
    Infor.find((err,InforList)=>{
        if(err){
            return console.error(err);
        }
        else
        {
            //console.log(InforList);
            res.render('infor/list',{title:"Business Contact List",InforList:InforList });
        }
    });
});

// get route for displaying info add page - create operation
router.get('/add',(req,res,next)=>{
    res.render('infor/add',{title:"Add Business Contact"});
});
// post route for processing info add page - create operation
router.post('/add',(req,res,next)=>{
  let newInfor  = Infor({
    "name":req.body.name,
    "contactNumber": req.body.published,
    "email": req.body.email


  });
  Infor.create(newInfor,(err,Infor)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect("/infor");
    }
  });
});
// get route for displaying info edit page - create operation
router.get('/edit/:id',(req,res,next)=>{
  
});
// post route for displaying info edit page - create operation
router.post('/edit/:id',(req,res,next)=>{
  
});
// get to perform deletion - delete operation
router.get('/delete/:id',(req,res,next)=>{
  
});
module.exports = router;