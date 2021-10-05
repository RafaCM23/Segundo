boton=document.getElementById("mostrar");
boton.addEventListener('click', mostrar);

function mostrar(){

    console.log("Active VR Displays: ",navigator.activeVRDisplays);
    console.log("App Code Name: ",navigator.appCodeName);
    console.log("App Name: ",navigator.appName);
    console.log("App Version: ",navigator.appVersion);
    console.log("Geolocation: ",navigator.geolocation);
    console.log("Language: ",navigator.language);
    console.log("Online: ",navigator.onLine);
    console.log("Plataforma: ",navigator.platform);
    console.log("Producto: ",navigator.product);
    console.log("UserAgent: ",navigator.userAgent);

}