const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 


// *************** Routing **********************************
require('./routes')(app)
// *****************************************************

app.listen(8000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("listening on port 8000")
    }
})