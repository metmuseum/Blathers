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

    const base64Image = ACNLQRGenerator(draw);
    base64Image.then((value)=>{			
        document.getElementById("qrCode").src = value;
    });
}

function generateQrCode(data) {
	var img = new Image();
	img.onload = function(){
		var canvas_convert = document.createElement('canvas');
		canvas_convert.width = draw.width;
		canvas_convert.height = draw.height;
		var ctx_convert = canvas_convert.getContext("2d");
		ctx_convert.drawImage(img,0,0,draw.width,draw.height);
        var imgdata = ctx_convert.getImageData(0, 0, draw.width, draw.height);	
        
        imageToQr(imgdata);
	}
	img.src = data;
}

export default generateQrCode;