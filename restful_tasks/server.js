// ******************  Configuration  ******************
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
// *****************************************************



// *****************  Express Setting  *****************
// app.use(express.static(path.join(__dirname, "./static")));
// app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public/dist/public")));
app.set("views", path.join(__dirname, "./views"));
app.use(bodyParser.json());
// *****************************************************



// *****************  Mongoose Setting  ****************
mongoose.connect("mongodb://localhost/my_task");
require("./server/models/task");
mongoose.Promise = global.Promise;
// *****************************************************



// *********************  Routing  *********************
require("./server/config/routes")(app);
// *****************************************************



// ********************  Server Up  ********************
app.listen(port, function () {
    console.log("listening on port " + port);
});
// *****************************************************