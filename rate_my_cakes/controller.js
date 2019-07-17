const Cake = require("./models");
const Review = require("./models");
const bodyParser = require('body-parser');
var moment = require('moment');

module.exports = {
    // GET: Retrieve all Cakes
    home: (req,res)=>{
        console.log("in Home route")
        Cake.find({}, function(err, data) {
            if(err){
                console.log("home Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                console.log("Data: ");
                console.log(data);
                res.json(data); //message: "Success", data: 
             }
        })
    },
    id: (req, res)=>{
        // GET: Retrieve a Cake by ID
        console.log("in Id route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        Cake.findOne({_id: req.params.id}, function(err, data){
            if(err){
                console.log("name Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                console.log("Data: ");
                console.log(data);
                res.json({message: "Success", data: data});
             }
        })
    },
    getAll: (req, res) => {
      Cake.find({}).sort({createdAt:'desc'}).exec(function(err, data){
        if(err){
          console.log("new Returned error", err);
          res.json({message: "Error", error: err});
       }
        else {
          console.log("Data: ");
          console.log(data);
          res.json({message: "Success", data: data});
       }
      })
    },
    create: (req, res)=>{
        // POST: Create a Cake
        // console.log("in Create route");
        // console.log("req.params.id: ");
        // console.log(req.params.id);
        // console.log("req.body: ");
        console.log(req.body);
        
        Cake.create(req.body, function(err, data){
            if(err){
                console.log("new Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                console.log("Data: ");
                console.log(data);
                res.json({message: "Success", data: data});
             }
        })
    },
    update: (req, res)=>{
        // PUT: Update a Cake by ID
        console.log("in Update route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        console.log("req.body: ");
        console.log(req.body);
        Cake.updateOne({_id: req.params.id}, req.body, function(err, data){
            if(err){
                console.log("new Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                console.log("Data: ");
                console.log(data);
                res.json({message: "Success", data: data});
             }
        })

    },
    delete: (req, res)=>{
        // DELETE: Delete a Cake by ID
        console.log("in Delete route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        Cake.remove({_id: req.params.id}, function(err, data){
            if(err){
                console.log("remove Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                console.log("Data: ");
                console.log(data);
                res.json({message: "Success", data: data});
             }
        })
    },
    generate: (re,res)=>{
        console.log("in GENERATE data");

        // Cake.Cakes.drop()
        // Pandas.collection.drop()
        // Cake.collection.drop();

        // var Cake = [
        //     { 'title': "Think about stuff more thoroughly", 'description': "Too much stuff"},
        //     { 'title': "Deck of Cards", 'description': "Building methods"},
        //     { 'title': "Coding in Angular", 'description': "Wheeeeeeeee"},
        //     { 'title': "White Boarding MergeSort", 'description': "Now that is Fun!"}
        // ];

        Cake.create(Cake, onInsert);

        function onInsert(err, docs) {
            if (err) {
                console.log("error: ");
                console.log(err);
            } else {
                console.info('%d Cakes were successfully stored.', docs.length);
            }
        }
        res.redirect('/');
    },
    getAllReviews: (req, res) => {
      Review.find({}).sort({createdAt:'desc'}).exec(function(err, data){
        if(err){
          console.log("new Returned error", err);
          res.json({message: "Error", error: err});
       }
        else {
          console.log("Data: ");
          console.log(data);
          res.json({message: "Success", data: data});
       }
      })
    },

}
