(function() {
    navigator.getUserMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
        
        var video;
        var webcamStream;
        
        function startWebcam() {
            if (navigator.getUserMedia) {
                navigator.getUserMedia ({
                    video: true,
                    audio: false
                },
                // successCallback
                function(localMediaStream) {
                    video = document.querySelector('video');
                    video.src = window.URL.createObjectURL(localMediaStream);
                    webcamStream = localMediaStream;
                },
                // errorCallback
                function(err) {
                    console.log("The following error occured: " + err);
                });
            } else {
                console.log("getUserMedia not supported");
            }  
        }
        
        function stopWebcam() {
            webcamStream.stop();
        }

        function qrcodeholder(){
            qr.addData('Hi!');
            qr.make();
            document.getElementById("qrplaceHolder").innerHTML = qr.createImgTag();
}

qrcodeholder();

})();


