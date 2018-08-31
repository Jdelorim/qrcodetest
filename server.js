var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("express-handlebars");
var multer = require("multer");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var storage = multer.diskStorage({
        destination: "./public/images/",
        filename: function(req, file, next) {
            console.log("the image object:",req.file);
            next(null, file.fieldname + "-" + Date.now()+ path.extname(file.originalname));
        }
    });


var upload = multer({
    storage: storage
}).single("profileImg");







//---------------------------

app.use(express.static("public"));



app.post("/upload",function (req,res) {
   // res.send("hello");
   upload(req, res, function(err){
    if(req.file) {
        console.log("from post",req.file);
       req.body = req.file.filename;
    }
     

   })

});



require("./models/qrcodeDB.js");

var server = app.listen(PORT,listening);
function listening(){
    console.log("listening on port:", PORT);
}

