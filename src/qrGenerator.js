import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";

let draw = new DrawingTool();

function imageToQr(imageData, resultRef) {
  draw.getImagePaletteRgb(imageData);
  const promiseBase64 = ACNLQRGenerator(draw);

  promiseBase64.then((data) => {
    const resultContainer = document.querySelector(resultRef);
    let qrCode = resultContainer.querySelector(".js-blathers__qr");
    qrCode.src = data;
    qrCode.classList.remove("is-hidden");
  });
}

function generateQrCode(imageSrc, objectData, resultRef) {
  draw.creator = objectData.creator || "Creator";
  draw.title = objectData.title || "Title";
  draw.town = objectData.location || "Location";

  let image = new Image();
  image.crossOrigin = "Anonymous";

  image.onload = function () {
    let canvasConvert = document.createElement("canvas");
    canvasConvert.width = draw.width;
    canvasConvert.height = draw.height;
    let contextConvert = canvasConvert.getContext("2d");
    contextConvert.drawImage(image, 0, 0, draw.width, draw.height);
    let imageData = contextConvert.getImageData(0, 0, draw.width, draw.height);
    imageToQr(imageData, resultRef);
  };
  image.src = imageSrc;
}

export default generateQrCode;
