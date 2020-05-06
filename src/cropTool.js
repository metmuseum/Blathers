import Croppie from "croppie";
import "croppie/croppie.css";
import generateQrCode from "./qrGenerator.js";

class CropTool {}

CropTool.init = (imageRef, objectData, resultRef) => {
  const imgEl = document.querySelector(imageRef);
  var crop = new Croppie(imgEl, {
    boundary: { width: 275, height: 275 },
    showZoomer: true,
    enableOrientation: true,
  });

  crop
    .bind({
      url: imgEl.src,
      orientation: 1,
    })
    .then(() => {
      crop.setZoom(0);
    });

  crop.element.addEventListener("update", function (ev) {
    const result = crop.result({ type: `base64`, size: `viewport` });

    result.then((imageSrc) => {
      generateQrCode(imageSrc, objectData, resultRef);
    });
  });
};

export default CropTool;
