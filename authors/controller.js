const Task = require("./models");
const bodyParser = require('body-parser');
var moment = require('moment');

module.exports = {
    // GET: Retrieve all Tasks
    home: (req,res)=>{
        console.log("in Home route")
        Task.find({}, function(err, data) {
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
        // GET: Retrieve a Task by ID
        console.log("in Id route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        Task.findOne({_id: req.params.id}, function(err, data){
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
    create: (req, res)=>{
        // POST: Create a Task
        console.log("in Create route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        console.log("req.body: ");
        console.log(req.body);
        req.body = {
            'title': "something",
            'description': "something else"
        }
        Task.create(req.body, function(err, data){
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
        // PUT: Update a Task by ID
        console.log("in Update route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        console.log("req.body: ");
        console.log(req.body);
        Task.updateOne({_id: req.params.id}, req.body, function(err, data){
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
        // DELETE: Delete a Task by ID
        console.log("in Delete route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        Task.remove({_id: req.params.id}, function(err, data){
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

        // Task.tasks.drop()
        // Pandas.collection.drop()
        Task.collection.drop();

        var task = [
            { 'title': "Think about stuff more thoroughly", 'description': "Too much stuff"},
            { 'title': "Deck of Cards", 'description': "Building methods"},
            { 'title': "Coding in Angular", 'description': "Wheeeeeeeee"},
            { 'title': "White Boarding MergeSort", 'description': "Now that is Fun!"}
        ];

        Task.create(task, onInsert);

        function onInsert(err, docs) {
            if (err) {
                console.log("error: ");
                console.log(err);
            } else {
                console.info('%d tasks were successfully stored.', docs.length);
            }
        }
        res.redirect('/');
    }
}