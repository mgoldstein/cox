function printWindow() {
var bV = parseInt(navigator.appVersion);
if (bV >= 4) window.print();
}

function doSaveAs() {
var bApp = navigator.appName;
	if (bApp == "Netscape") {
	alert('Save feature available only in Internet Explorer 4.0 and later.\nInstead, try opening the frame in a separate window by right-clicking on it.');
	} else if (document.execCommand) {
	document.execCommand("SaveAs");
	} 
}