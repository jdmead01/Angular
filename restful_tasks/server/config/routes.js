
var mongoose = require("mongoose");
var Task = mongoose.model("Task");
var tasks = require("../controllers/tasks");

module.exports = function (app) {

    // Display all tasks 
    app.get("/tasks", function (request, response) {
        tasks.showAll(request, response);
    });

    // get a single task
    app.get("/tasks/:id", function (request, response) {
        tasks.showOne(request, response);
    });

    // server receives information (post) to create a new task
    app.post("/tasks", function (request, response) {
        console.log("I am in the /tasks app.post route.js");
        tasks.create(request, response);
    });

    app.put("/tasks/:id", function (request, response) {
        tasks.update(request, response);
    });

    app.delete("/tasks/:id", function (request, response) {
        tasks.destroy(request, response);
    });

};