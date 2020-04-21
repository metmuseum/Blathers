import Croppie from "croppie";
import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";
import "croppie/croppie.css";


class CropTool{
}

var draw = new DrawingTool();

function initDrawTool(data) {
	var img = new Image();
	img.onload = function(){
		var canvas_convert = document.createElement('canvas');
		canvas_convert.width = draw.width;
		canvas_convert.height = draw.height;
		var ctx_convert = canvas_convert.getContext("2d");
		ctx_convert.drawImage(img,0,0,draw.width,draw.height);
		var imgdata = ctx_convert.getImageData(0, 0, draw.width, draw.height);

		//draw.addCanvas(canvas_convert);
		
		draw.getImagePaletteRgb(imgdata);
		const base64Image = ACNLQRGenerator(draw);
		base64Image.then((value)=>{			
			document.getElementById("qrCode").src = value;
		});
	}
	img.src = data;
}

CropTool.init = () => {
	const imgEl = document.querySelector('.js-image');
	const resultInput = document.querySelector(".js-blathers-result");
	var crop = new Croppie(imgEl, {
		viewport: { width: 100, height: 100 },
		boundary: { width: 300, height: 300 },
		showZoomer: true,
		enableOrientation: true
	});

	crop.bind({
		url: imgEl.src,
		orientation: 1
	});

	crop.element.addEventListener('update', function(ev) {
		const result = crop.result({type: `base64`, size: `viewport`});
		result.then((value)=>{
			resultInput.value = value;

			initDrawTool(value);			
		});

	});

}
export default CropTool;
