import "./blathers.scss"

// define draw
var draw = new DrawingTool();

// find the img element
var inputImage = document.getElementById("test");
inputImage.crossOrigin = 'Anonymous';

// set up a canvas
var renderCanvas = document.createElement('canvas');
var renderContext = renderCanvas.getContext('2d');
renderContext.fillStyle = "rgba(255,255,255,1)";
renderContext.fillRect(0, 0, 32, 128);

// define the image_rbg function to draw the image down
function image_rgb(imgdata) {
    console.log("rgb");
    let palette = [];
    for (let i = 0; i < 256; i++) { palette.push({ n: i, c: 0 }); }
    let pixelCount = draw.pixelCount * 4;
    for (let i = 0; i < pixelCount; i += 4) {
        palette[draw.findRGB([imgdata.data[i], imgdata.data[i + 1], imgdata.data[i + 2]])].c++;
    }
    palette.sort(function (a, b) {
        if (a.c > b.c) { return -1; }
        if (a.c < b.c) { return 1; }
        return 0;
    });
    for (let i = 0; i < 15; i++) { draw.setPalette(i, palette[i].n); }

    //Set each pixel to the nearest color from the palette
    for (let i = 0; i < pixelCount; i += 4) {
        let x = (i >> 2) % draw.width;
        let y = Math.floor((i >> 2) / draw.width);
        draw.setPixel(x, y, [imgdata.data[i], imgdata.data[i + 1], imgdata.data[i + 2]]);
    }
    draw.onLoad();
};

// onload method
inputImage.onload = function () {
    var canvas_convert = document.createElement('canvas');
    canvas_convert.width = draw.width;
    canvas_convert.height = draw.height;
    var ctx_convert = canvas_convert.getContext("2d");
    ctx_convert.drawImage(img, 0, 0, draw.width, draw.height);
    var imgdata = ctx_convert.getImageData(0, 0, draw.width, draw.height);
    image_rgb(imgdata);
    
}

// load the image
var url = './assets/download.png';
inputImage.src = url;

// try to draw the qr code
const obj = $('#output-img');
let data = draw.toString();
console.log("data " + data);
if (draw.width == 64) {
    obj.qrcode({ "correctLevel": 0, "text": data.substr(0, 0x21C), "render": "canvas", "width": 512, "height": 512, "multipart_num": 0, "multipart_total": 3, "multipart_parity": 0x77 });
    obj.qrcode({ "correctLevel": 0, "text": data.substr(0x21C, 0x21C), "render": "canvas", "width": 512, "height": 512, "multipart_num": 1, "multipart_total": 3, "multipart_parity": 0x77 });
    obj.qrcode({ "correctLevel": 0, "text": data.substr(0x21C * 2, 0x21C), "render": "canvas", "width": 512, "height": 512, "multipart_num": 2, "multipart_total": 3, "multipart_parity": 0x77 });
    obj.qrcode({ "correctLevel": 0, "text": data.substr(0x21C * 3, 0x21C), "render": "canvas", "width": 512, "height": 512, "multipart_num": 3, "multipart_total": 3, "multipart_parity": 0x77 });
} else {
    obj.qrcode({ "correctLevel": 0, "text": data, "render": "canvas", "width": 512, "height": 512 });
}

