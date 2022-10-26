let mongoose = require('mongoose');

//create a model class
let infoModel = mongoose.Schema({
  name : String,
  contactNumber : String,
  email : String
},{

     collection:"info"
});

module.exports = mongoose.model('info',infoModel);