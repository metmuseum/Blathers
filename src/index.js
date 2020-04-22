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
const acQrModal = document.querySelector(".js-ac-modal");
const artworkImage = document.querySelector(".artwork__image");
const acImage = acQrModal.querySelector(".js-ac-image");

const acQrClose = acQrModal.querySelector(".js-ac-modal__close");
let cropToolNotInitialized = true;

document.querySelector(".js-animal-crossing-button").addEventListener("click", (e)=> {
	e.preventDefault();

	if (cropToolNotInitialized) {
		acImage.src = artworkImage.src;
		CropTool.init();
		cropToolNotInitialized = false;
	}

	acQrModal.classList.toggle("is-open");
});

acQrClose.addEventListener("click", (e) => {
	e.preventDefault();
	acQrModal.classList.remove("is-open");
})
