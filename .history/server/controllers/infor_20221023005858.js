let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create reference to the model
let Infor = require('../models/infor');
module.exports.displayBookList= (req,res,next)=>{
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
}
module.exports.displayAddPage = (req,res,next)=>{
    res.render('infor/add',{title:'Add Contact'})
}

module.exports.processAddPage = (req,res,next)=>{
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
}
module.exports.displayEditPage = (req,res,next)=>{
    let id= req.params.id
    Infor.findById(id,(err,inforToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show edit view
            res.render('infor/edit',{title:"Edit Contact", infor:inforToEdit})

        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
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
  }

  module.exports.performDelete=(req,res,next)=>{
    let id= req.params.id;

    Infor.remove({_id:id},(err)=>{
        if(err){
            console.log(err);
            res.end(err);
           }
           else{
            res.redirect('/infor')
           }
    });
}
     
