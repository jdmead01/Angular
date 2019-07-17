const mongoose = require('mongoose')
const cakeSchema = require('./models/cakeSchema')

mongoose.model('cake', cakeSchema)
let cake = mongoose.model('cake')

module.exports = cake