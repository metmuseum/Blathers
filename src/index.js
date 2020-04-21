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
    }

    imageInput.src = 'assets/images/download.png';
}

CropTool.init();