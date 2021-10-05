boton=document.getElementById("mostrar");
boton.addEventListener('click', mostrar);

function mostrar(){
    console.log("Orientacion: ",screen.orientation);
    console.log("Altura: ",screen.height);
    console.log("Ancho: ",screen.width);
  

}