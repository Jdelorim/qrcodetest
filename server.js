var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 4040;

app.use(express.static("public"));


var server = app.listen(PORT,listening);
function listening(){
    console.log("listening on port:", PORT);
}
