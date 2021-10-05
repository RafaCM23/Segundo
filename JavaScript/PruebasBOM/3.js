boton=document.getElementById("mostrar");
boton.addEventListener('click', mostrar);

asignar=document.getElementById("asign");
asignar.addEventListener('click', asign);

reemplazar=document.getElementById("replace");
reemplazar.addEventListener('click', replace);

recargar=document.getElementById("reload");
recargar.addEventListener('click', reload);
function mostrar(){
    console.log("Seccion: ",location.hash);
    console.log("Host: ",location.host);
    console.log("Hostname: ",location.hostname);
    console.log("Href: ",location.href);
    console.log("Path: ",location.pathname);
    console.log("Puerto: ",location.port);
    console.log("Protocol: ",location.protocol);
    console.log("Search: ",location.search);


}

function asign(){
location.assign("https://google.es");
}
function replace(){
    location.replace("https://google.es");//borra del array history del navegador
}
function reload(){
    location.reload(true);
    //location.reload(false); recarga la pagina desde la cache no desde el servidor
}