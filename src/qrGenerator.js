import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";

var draw = new DrawingTool();

function imageToQr(imageData) 
{
    draw.getImagePaletteRgb(imageData);

    const promiseBase64 = ACNLQRGenerator(draw);
    promiseBase64.then((data)=>{			
        document.getElementById("qrCode").src = data;
    });
}

function generateQrCode(data, creator, title, town) 
{
    draw.creator = creator;
    draw.title = title;
    draw.town = town;

	var image = new Image();
	image.onload = function(){
		var canvasConvert = document.createElement('canvas');
		canvasConvert.width = draw.width;
		canvasConvert.height = draw.height;
		var contextConvert = canvasConvert.getContext("2d");
		contextConvert.drawImage(image,0,0,draw.width,draw.height);
        var imageData = contextConvert.getImageData(0, 0, draw.width, draw.height);	
        
        imageToQr(imageData);
	}
	image.src = data;
}

export default generateQrCode;