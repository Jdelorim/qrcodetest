var QRCode;
var canvas = document.getElementById('canvas');

QRCode.toCanvas(canvas, "helloworld", function(error){
    if(error) console.error(error);
    console.log("yes!");
})






