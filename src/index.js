import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";
import CropTool from "./cropTool.js";
import generateQrCode from "./qrGenerator.js";

import "./blathers.scss";

const blathersify = (configObject) => {
	const useCropTool = configObject.useCropTool || false;
	const imageRef = configObject.image || ".js-blathers-source";
	const objectData = configObject.objectData || {};
	const resultRef = configObject.resultContainer || ".js-blathers-result";
	const resultContainer = document.querySelector(resultRef);

	let qrCode = document.createElement('img');
	qrCode.setAttribute('alt', "QR Code for Animal Crossing New Horizons");
	qrCode.classList.add("blathers__qr", "js-blathers__qr", "is-hidden");
	resultContainer.appendChild(qrCode);

	useCropTool ?
		CropTool.init(imageRef, objectData, resultRef) :
		generateQrWithoutCrop(imageRef, objectData, resultRef);
}

const generateQrWithoutCrop = (imageRef, objectData, resultRef) => {
	const imageSrc = document.querySelector(imageRef).src;
	generateQrCode(imageSrc, objectData, resultRef);
}

document.blathersify = (configObject) => blathersify(configObject);

export default blathersify;
