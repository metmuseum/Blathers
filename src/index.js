import ACNLQRGenerator from "./libs/ACNLQRGenerator";
import DrawingTool from "./libs/DrawingTool";
import CropTool from "./cropTool.js";
import "./blathers.scss"

document.animalCrossingify =  function(objectData = {element: '.js-ac-image', creator: "The Met", island: "The Met"}) {
	CropTool.init(objectData);
}
