notes

first take a look at the wire frame and do an outline of what you need. 

routes 

POST api/cake --------> create cake 
GET api/cakes --------> All Cakes 
GET api/cakes/:id -----> 
PATCH /api/cakes/:id ---->

set up express 

create next project npm init -y

add server.js in main folder (root)

create a server folder to put the rest of the files into 

controller.js
models.js 
routes.js 

1. setup server.js 

const express = require("express")
const app = express()




models.js (back end validations are in the models)
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const RatingSchema = mongoose.Schema([
    review: {type: String, required:true, minlength: 3},
    stars: {tyoe: Number, min:1, max:5}
])



const SteakSchema = mongoose.Schema({
    ChefName: {type: String, required: true},
    DoneNess: {type: String, required: true},
    Seasoned: {type: Boolean},
    Image: {type: String}
    Ratings: [RatingSchema]

}, {timestamps:true})