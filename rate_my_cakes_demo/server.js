const express = require("express")
const app = express()

require("./server")





app.listen(8000, (err)=> {
    if(err){
        console.log(err)
    } else{
        console.log("Listening on port 8000")
    }
})