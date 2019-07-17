const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cake_db');

var Review  = new mongoose.Schema({
    rating: {type: Number, required: true, min: 1, max: 5},
    review : {type: String, required: true, minlength: 10},
    createdAt: { type: Date, default: Date.now},
});


var CakeSchema = new mongoose.Schema({
    bakerName:  { type: String, required: true, minlength: 2},
    ImageUrl: { type: String, required: true },
    reviews: [Review],
    completed: { type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now}
    // stars: { type: Number, required: true, default: 1 }
}, {timestamps: true });

mongoose.model('Cake', CakeSchema);
var Cake = mongoose.model('Cake')

module.exports = Cake, Review;
