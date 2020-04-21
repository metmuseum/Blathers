import Croppie from "croppie";
import "croppie/croppie.css";


class CropTool{
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
		});

	});

}
export default CropTool;
