const Author = require("./models");
const bodyParser = require('body-parser');
var moment = require('moment');

module.exports = {
    // GET: Retrieve all Authors
    home: (req, res) => {
        console.log("in Home route")
        Author.find({}, function (err, data) {
            if (err) {
                console.log("home Returned error", err);
                res.json({
                    message: "Error",
                    error: err
                });
            } else {
                console.log("Data: ");
                console.log(data);
                res.json(data); //message: "Success", data: 
            }
        })
    },
    id: (req, res) => {
        // GET: Retrieve a Author by ID
        console.log("in Id route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        Author.findOne({
            _id: req.params.id
        }, function (err, data) {
            if (err) {
                console.log("name Returned error", err);
                res.json({
                    message: "Error",
                    error: err
                });
            } else {
                console.log("Data: ");
                console.log(data);
                res.json({
                    message: "Success",
                    data: data
                });
            }
        })
    },
    create: (req, res) => {
        // POST: Create a Author
        console.log("in Create route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        console.log("req.body: ");
        console.log(req.body);
        req.body = {
            'title': "something",
            'description': "something else"
        }
        Author.create(req.body, function (err, data) {
            if (err) {
                console.log("new Returned error", err);
                res.json({
                    message: "Error",
                    error: err
                });
            } else {
                console.log("Data: ");
                console.log(data);
                res.json({
                    message: "Success",
                    data: data
                });
            }
        })
    },
    update: (req, res) => {
        // PUT: Update a Author by ID
        console.log("in Update route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        console.log("req.body: ");
        console.log(req.body);
        Author.updateOne({
            _id: req.params.id
        }, req.body, function (err, data) {
            if (err) {
                console.log("new Returned error", err);
                res.json({
                    message: "Error",
                    error: err
                });
            } else {
                console.log("Data: ");
                console.log(data);
                res.json({
                    message: "Success",
                    data: data
                });
            }
        })

    },
    delete: (req, res) => {
        // DELETE: Delete a Author by ID
        console.log("in Delete route");
        console.log("req.params.id: ");
        console.log(req.params.id);
        Author.remove({
            _id: req.params.id
        }, function (err, data) {
            if (err) {
                console.log("remove Returned error", err);
                res.json({
                    message: "Error",
                    error: err
                });
            } else {
                console.log("Data: ");
                console.log(data);
                res.json({
                    message: "Success",
                    data: data
                });
            }
        })
    },
    generate: (re, res) => {
        console.log("in GENERATE data");

        // Author.Authors.drop()
        // Pandas.collection.drop()
        Author.collection.drop();

        var author = [{
                'name' : "Donald Trump",
            },
            {
                'name': "Judge Jenine Perro",
            },
            {
                'name' : "Anne Rice",
            },
            {
                'name': "Angelina Jolie",
            }
        ];

        Author.create(author, onInsert);

        function onInsert(err, docs) {
            if (err) {
                console.log("error: ");
                console.log(err);
            } else {
                console.info('%d Authors were successfully stored.', docs.length);
            }
        }
        res.redirect('/');
    }
}