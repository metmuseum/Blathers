import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";

import "./blathers.scss"

var canvas = document.getElementById('imageToEncode'),
context = canvas.getContext('2d');

document.test_image_to_qr = function()
    {
        var imageToConvert = new Image();
        imageToConvert.src = 'assets/images/download.png';
        imageToConvert.onload = function(){
        context.drawImage(imageToConvert, 0, 0);

        var drawingTool = new DrawingTool(canvas);
        const img = ACNLQRGenerator(drawingTool);

        console.log(drawingTool);

        var canvas = document.getElementById("qrCode");
        var ctx = canvas.getContext("2d");

        var imageQr = new Image();
        imageQr.onload = function() {
            ctx.drawImage(image, 0, 0);
        };
        image.src = img;
    }
}