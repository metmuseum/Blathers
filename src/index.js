import "./blathers.scss"

import { BrowserQRCodeSvgWriter } from '@zxing/library';
var base64;

function getBase64FromImage() {
    // To bypass errors (“Tainted canvases may not be exported” or “SecurityError: The operation is insecure”)
    // The browser must load the image via non-authenticated request and following CORS headers
    var img = new Image();
    img.crossOrigin = 'Anonymous';

    // The magic begins after the image is successfully loaded
    img.onload = function () {
        var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;
        ctx.drawImage(img, 0, 0);

        // Unfortunately, we cannot keep the original image type, so all images will be converted to PNG
        // For this reason, we cannot get the original Base64 string
        var uri = canvas.toDataURL('image/png'),
        b64 = uri.replace(/^data:image.+;base64,/, '');

        console.log(b64); //-> "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg=="
        base64 = b64;
    };

    // If you are loading images from a remote server, be sure to configure “Access-Control-Allow-Origin”
    // For example, the following image can be loaded from anywhere.
    var url = '../assets/download.png';
    img.src = url;
}

getBase64FromImage();

console.log(base64);

const mainNode = document.querySelector(".main");

mainNode.classList.add("is-loaded");

const codeWriter = new BrowserQRCodeSvgWriter();

// or render it directly to DOM.
codeWriter.writeToDom('#result', base64, 300, 300);
