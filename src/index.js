import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";
import CropTool from "./cropTool.js";
import generateQrCode from "./qrGenerator.js";

import "./blathers.scss";

document.animalCrossingify = function (
	objectData = {
		element: '.js-ac-image',
 		title: "Title",
		creator: "Creator",
		island: "Somewhere"}) {
	CropTool.init(objectData);
}

document.animalCrossingifyWithoutCropping = function (
	objectData = {
		element: '.js-no-crop',
 		title: "Title",
		creator: "Creator",
		island: "Somewhere"
	}) {

	const imageSrc = document.querySelector(objectData.element).src;
	generateQrCode(imageSrc, objectData.creator, objectData.title, objectData.island);

}
