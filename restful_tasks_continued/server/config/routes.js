const mongoose = require("mongoose");
const Task = mongoose.model("Task");
const tasks = require("../controllers/tasks");

module.exports = function (app) {

    // app.get("/", function (request, response) {
    //     tasks.showAll(request, response);
    // });

    app.get("/tasks", function (request, response) {
        tasks.showAll(request, response);
    });

    app.get("/tasks/:id", function (request, response) {
        tasks.showOne(request, response);
    });

    app.post("/tasks", function (request, response) {
        tasks.create(request, response);
    });

    app.put("/tasks/:id", function (request, response) {
        tasks.update(request, response);
    });

    app.delete("/tasks/:id", function (request, response) {
        tasks.destroy(request, response);
    });

};