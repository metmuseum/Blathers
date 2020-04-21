import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";

import "./blathers.scss"

var canvas = document.getElementById('imageToEncode'),
context = canvas.getContext('2d');

document.testImageToQr = function()
{
    var canvasQr = document.getElementById("qrCode");
    var contextQr = canvasQr.getContext("2d");
    var imageQr = new Image();
    imageQr.onload = function() {
        contextQr.drawImage(imageQr, 0, 0);
    };

    var imageInput = new Image();
    imageInput.onload = function(){
        context.drawImage(imageInput, 0, 0);

        var drawingTool = new DrawingTool(canvas);
        const base64Image = ACNLQRGenerator(drawingTool);

        console.log(drawingTool);                        
        imageQr.src = base64Image;
    }

    imageInput.src = 'assets/images/download.png';
}