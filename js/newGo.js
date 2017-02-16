// Copyright 1997 Los Angeles Times  travis.smith@latimes.com  All Rights Reserved

function newGo(box) {
if ((-1 < box.selectedIndex) && (box.options[box.selectedIndex].value.lastIndexOf('ap.org') != -1)) {
	document.forms[0].action = box.options[box.selectedIndex].value;
	document.forms[0].submit();
	return true;
	}
if ((-1 < box.selectedIndex) && (box.options[box.selectedIndex].value != 'nil')) {
	val = box.options[box.selectedIndex].value;
	if (val.lastIndexOf(',') != -1) {
		window.open ((val.substring(0,val.lastIndexOf(","))), (val.substring((val.lastIndexOf(",")+1) , val.length)));
	} else {
		window.open (val,'_top');
		}
	}
	return true;
}
