// Copyright 1997 Los Angeles Times  travis.smith@latimes.com  All Rights Reserved

if (document.images) {
	version = "yep";
} else {
	version = "nope";
}
var switchImage = "";

function preLoad(fileName) {
    if (version == "yep") {
		loadImage = new Image();
		loadImage.src = fileName;
	}
}

function rollOver(name,file) {
    if (version == "yep") {
		switchImage = new Image();
		currentImage = document.images[name];
		if (!(file)) {
			switchImage.src = currentImage.src.substring(0,currentImage.src.length-4)+"_roll"+currentImage.src.substring(currentImage.src.length-4,currentImage.src.length);
		} else {
			switchImage.src = file;
		}
		currentImage.src = switchImage.src;
	}
}

function rollOut(name,file) {
    if (version == "yep") {
		switchImage = new Image();
		currentImage = document.images[name];
		if (!(file)) {
			switchImage.src = currentImage.src.substring(0,currentImage.src.length-9)+currentImage.src.substring(currentImage.src.length-4,currentImage.src.length);
		} else {
			switchImage.src = file;
		}
		currentImage.src = switchImage.src;
    }
}

