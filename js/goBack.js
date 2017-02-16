var js = 1.0; 
Version = parseInt(navigator.appVersion); 

if (navigator.appName == "Netscape")    js = ((Version >= 4) ? 1.2 : ( (Version == 3) ? 1.1 : 1.0 ));
else    if (navigator.appVersion.indexOf('MSIE') != -1) js = ((Version >= 4) ? 1.1 : 1.0);

function goback() {
  if (js >= 1.1) { return parent.history.back(); }
  if (js >= 1.0) { return history.go(-1); }
}
