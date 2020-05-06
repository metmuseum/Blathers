import blathersify from "./index.js";

console.log(blathersify);

window.blathersify = blathersify;

const stillLifeWithSkullData = {
  title: "Still Life with a Skull and a Writing Quill",
  creator: "Pieter Claesz",
  location: "Met Museum",
};

const romanVData = {
  title: "Roman Alphabet Letter V",
  creator: "Bernard Picart",
  location: "Met Museum",
};

window.onload = function () {
  window.blathersify({
    useCropTool: true,
    image: ".js-blathers-source",
    resultContainer: ".js-blathers-result",
    objectData: stillLifeWithSkullData,
  });

  window.blathersify({
    useCropTool: false,
    image: ".js-nocrop-source",
    resultContainer: ".js-nocrop-result",
    objectData: romanVData,
  });
};
