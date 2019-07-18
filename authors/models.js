const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/task_db');

var TaskSchema = new mongoose.Schema({
    title:  { type: String, required: true, minlength: 2},
    description: { type: String, maxlength: 255, default: ""},
    completed: { type: Boolean, default: false}
}, {timestamps: true });

mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task')

module.exports = Task;