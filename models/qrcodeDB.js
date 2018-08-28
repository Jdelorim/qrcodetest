var Sequelize = require("sequelize");
var bodyParser = require("body-parser");
var sequelize = require("../config/connection.js");

var QRcode = require('qrcode');
var fs = require("fs");
var imageStore = "./images";
var imgData;
var base64Data;
var siteToGenerate = "https://jd-drawing-app.herokuapp.com/"

var QRcodeDataBase = sequelize.define("qrcode_db", {
    name: Sequelize.STRING,
    image: Sequelize.TEXT
});

//console.log(QRcode);
QRcodeDataBase.sync();

QRcode.toDataURL(siteToGenerate, function(err, pic){
    imgData = pic;
  //  console.log("imgDATA:",imgData);
    //regex to remove the heading and just get the base64 string
     base64Data = imgData.replace(/^data:image\/png;base64,/,"");
   //  console.log("baseDATA:",base64Data);
    writeMe();
  // tryme();
});

function writeMe() {
    fs.writeFile("./images/test03.png", base64Data, "base64", function(err){
        if(err) {
        console.log("file error:" ,err);
        } else {
         //   console.log("on other side:",base64Data);
            QRcodeDataBase.create({
                name: "josh",
                image: base64Data
            });
        console.log("wrote the file!");
        }
    });
    }






  
    //console.log("after sync:",QRcode);
    
    
  
    
    
    
    
        QRcodeDataBase.findAll({}).then(function(results) {
           console.log("QRcodeDBs:",results);
          //  res.send(results);
        })
    
    
    //console.log(base64Data);
    
    







       
    

    




