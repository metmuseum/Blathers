import Blathersify from "./index.js";

window.blathersify = Blathersify;

const stillLifeWithSkullData = {
  title: "Still Life with a Skull and a Writing Quill",
  creator: "Pieter Claesz",
  location: "Met Museum",
};

const entranceToADutchPortData = {
  title: "Entrance to a Dutch Port",
  creator: "Willem van de Velde II",
  location: "Met Museum",
};

window.onload = function () {
  new Blathersify({
    useCropTool: true,
    image: ".js-blathers-source",
    resultContainer: ".js-blathers-result",
    objectData: stillLifeWithSkullData,
  });

  new Blathersify({
    useCropTool: false,
    image: ".js-nocrop-source",
    resultContainer: ".js-nocrop-result",
    objectData: entranceToADutchPortData,
  });
};
