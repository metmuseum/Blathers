import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";
import CropTool from "./cropTool.js";
import "./blathers.scss"

var canvas = document.getElementById('imageToEncode'),
context = canvas.getContext('2d');

document.imageToCanvas = function()
{
    var imageInput = new Image();
    imageInput.onload = function(){
        context.drawImage(imageInput, 0, 0);

        var drawingTool = new DrawingTool(canvas);
        const base64Image = ACNLQRGenerator(drawingTool);

        base64Image.then(function(value) {
            console.log(drawingTool);
            document.canvasToQr(value);
        });
    }

    imageInput.src = 'assets/images/download.png';
}

document.canvasToQr = function(data)
{
    var canvasQr = document.getElementById("qrCode");
    var contextQr = canvasQr.getContext("2d");

    var imageQr = new Image();
    imageQr.onload = function() {
        contextQr.drawImage(imageQr, 0, 0);
    };
    imageQr.src = data;
}



CropTool.init();
