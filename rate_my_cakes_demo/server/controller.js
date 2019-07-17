const Steaks = require("./models")

module.exports = {
    allSteaks: (req, res)=>{
        Steaks.find()
            .then(data => res.json({Steaks:data, message:"success"})
            .catch(data => res.json({info:err, message:"OH NOOOOOO"})
    }
    oneSteaks: (req, res)=>{
        Steaks.find()
            .then(data => res.json({Steaks:data, message:"success"})
            .catch(data => res.json({info:err, message:"OH NOOOOOO"})
    }
    allSteaks: (req, res)=>{
        Steaks.find()
            .then(data => res.json({Steaks:data, message:"success"})
            .catch(data => res.json({info:err, message:"OH NOOOOOO"})
    }
    reviewSteaks: (req, res)=>{
        Steaks.find()
            .then(data => res.json({Steaks:data, message:"success"})
            .catch(data => res.json({info:err, message:"OH NOOOOOO"})
    }
}