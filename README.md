# Blathers

Package and test app to Animal Crossing-ify Met Images. This is a tweaked version of [thulinma](https://github.com/thulinma)'s ACNLPatternTool found [here](https://github.com/Thulinma/ACNLPatternTool).

![Blathers](blathers.png)

## Usage (WIP)

    npm install blathers --save

or whatever.

Production-ready stuff is in `/dist`.

Otherwise, ESM:

```js
import Blathersify from "blathers";

new Blathersify({
	useCropTool: boolean, //default false
	image: "", //default ".js-blathers-source"
	resultContainer: "", //default ".js-blathers-result"
	objectData: {
		title: "",
	  creator: "",
	  location: "",
	}
});
```

If you don't have a package manager, just include `blathers.bundle.js` and `blathers.bundle.css` in your project
and call window.blathersify() instead of new Blathersify().


## Local Development Set Up Instructions

1. Clone this repository
2. npm install
3. npm run start (to start up live reload)
4. npm run build (to generate new dist files)

There is a patched version of Zebra Crossing (also based off thulinma's [work](https://github.com/Thulinma/zxing-js-library/tree/c0584ff4133dd68fc996ac8e45cdff40a6d1f483)) included in this project that should work out of the box. If not, fuss at Joseph.

## Referencing This Project

TODO

## The Collection

![Blathers](joseph.jpg)
