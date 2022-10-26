let mongoose = require('mongoose');
/*Web_Assignment2, Mandeep Kaur 301225713, oct-25-2022*/
//create a model class
let inforModel = mongoose.Schema({
  name : String,
  contactNumber : String,
  email : String
},{

     collection:"infor"
});

module.exports = mongoose.model('infor',inforModel);