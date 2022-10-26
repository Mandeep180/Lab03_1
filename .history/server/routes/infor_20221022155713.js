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
    "contactNumber": req.body.contactNumber,
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
  let is = req.params.id;
  Book.findById(id,(err, inforToEdit)=>{
    if(err){
        console.log(err);
        res.end(err);
    }else{
        //show edit view
        res.render('infor/edit',{title: 'Edit Business Contact List ', infor: inforToEdit})
    }
  });
});
// post route for displaying info edit page - create operation
router.post('/edit/:id',(req,res,next)=>{
  let id= req.params.id
  let updatedinfor = Infor({
    "name":req.body.name,
    "contactNumber": req.body.contactNumber,
    "email": req.body.email
  });
  Infor.updateOne({id:id}, updatedinfor,(err)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        res.redirect('/infor');
    }
  })
});
// get to perform deletion - delete operation
router.get('/delete/:id',(req,res,next)=>{
  let id= req.params.id;
   if(err){
    console.log(err);
    res.end(err);
   }
   else{
    res.redirect('/infor')
   }

});
module.exports = router;