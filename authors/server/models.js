const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/author_db');

var Schema = mongoose.Schema;
var AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});
mongoose.model("Author", AuthorSchema);
var Author = mongoose.model("Author");

module.exports = Author