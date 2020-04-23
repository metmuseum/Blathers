import Croppie from "croppie";
import "croppie/croppie.css";
import generateQrCode from "./qrGenerator.js"

class CropTool{
}

CropTool.init = (objectData) => {
	const imgEl = document.querySelector(objectData.element);
	var crop = new Croppie(imgEl, {

		boundary: { width: 300, height: 300 },
		showZoomer: true,
		enableOrientation: true
	});

	crop.bind({
		url: imgEl.src,
		orientation: 1
	}).then(function(){
		crop.setZoom(0);
	});
	
	
	crop.setZoom(1);

	crop.element.addEventListener('update', function(ev) {
		const result = crop.result({type: `base64`, size: `viewport`});		

		result.then((value)=>{
			generateQrCode(value, objectData.creator, objectData.title, objectData.island);			
		});
	});
	

}
export default CropTool;
