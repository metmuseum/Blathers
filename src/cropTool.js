import Croppie from "croppie";
import "croppie/croppie.css";
import generateQrCode from "./qrGenerator.js"

class CropTool{
}

CropTool.init = () => {
	const imgEl = document.querySelector('.js-ac-image');
	var crop = new Croppie(imgEl, {

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
			generateQrCode(value);
		});

	});

}
export default CropTool;
