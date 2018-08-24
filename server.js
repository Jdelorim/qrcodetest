var express = require("express");
var bodyParser = require("body-parser");

var QRcode = require('qrcode');
var app = express();
var PORT = process.env.PORT || 4040;


var fs = require("fs");
var imageStore = "./images";
var imgData;
var base64Data;
var siteToGenerate = "https://jd-drawing-app.herokuapp.com/";
var testVar;
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

function codeReader() {
    QRcode.toDataURL(siteToGenerate, function(err, pic){
        imgData = pic;
      //  console.log("imgDATA:",imgData);
        //regex to remove the heading and just get the base64 string
         base64Data = imgData.replace(/^data:image\/png;base64,/,"");
        // console.log("baseDATA:",base64Data);
       
         writeME();
    });
}
codeReader();


//---------------------------

app.use(express.static("public"));




function writeME() {
fs.writeFile("./images/test####.png", base64Data, "base64", function(err){
    if(err) {
    console.log("file error:" ,err);
    } else {
    
    console.log("wrote the file!");
    }
});
}

require("./models/qrcodeDB.js")(app);

var server = app.listen(PORT,listening);
function listening(){
    console.log("listening on port:", PORT);
}

module.export = {
    testVar: "fsnfdnfhello"
}