import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";

var draw = new DrawingTool();

function imageToQr(imageData) 
{
    draw.getImagePaletteRgb(imageData);
    /*draw.title = "Self-Portrait with a Straw Hat";
    draw.creator = "Vincent van Gogh";
    draw.town = "The Netherlands";*/
    //draw.title = "Claude Monet";
    
    /*draw.title = "Antoine Dominique Sauveur";
    draw.creator = "Paul Cezanna";*/

    draw.creator = "Pieter Claesz";
    draw.title = "Still Life with a Skull and a Writing Quill";

    const base64Promise = ACNLQRGenerator(draw);
    base64Promise.then((data)=>{			
        document.getElementById("qrCode").src = data;
    });
}

function generateQrCode(data) 
{
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