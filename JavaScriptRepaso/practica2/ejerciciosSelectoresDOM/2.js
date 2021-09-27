
enlace=document.getElementById("enlace");
enlace.addEventListener('click',leer);

function leer(){

document.querySelector("#adicional").classList.remove("oculto")
document.querySelector("#enlace").classList.add("oculto")
}