let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayHomePage = (req,res,next)=>{
    res.render('index',{title:'Home'});

}
module.exports.displayAboutPage = (req,res,next)=>{
    res.render('about',{title:'About'});
    
}
module.exports.displayProjectsPage = (req,res,next)=>{
    res.render('projects',{title:'Projects'});

    
}
module.exports.displayServicesPage = (req,res,next)=>{
    res.render('services',{title:'Services'});
    
}
module.exports.displayContactPage = (req,res,next)=>{
    res.render('contact',{title:'Contact'});
    
    
}