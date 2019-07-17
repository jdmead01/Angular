const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');

app.use(express.static( __dirname + '/public/dist/public' ));
app.set('views', __dirname+'/views');
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());

require('./routes')(app)

app.listen(8000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("listening on port 8000")
    }
})