var Sequelize = require("sequelize");
var bodyParser = require("body-parser");
var sequelize = require("../config/connection.js");
var qrcodeData = require("../server.js");

console.log("getting from server:",qrcodeData.testVar);
module.exports = function(app) {
var QRcode = sequelize.define("qrcode_db", {
    name: Sequelize.STRING,
    image: Sequelize.TEXT
});

//console.log(QRcode);
QRcode.sync();
//console.log("after sync:",QRcode);
QRcode.create({
    name: "josh",
    image: "kdsmfodfm"
});



    QRcode.findAll({}).then(function(results) {
     //   console.log("QRcodeDBs:",results);
      //  res.send(results);
    })



}