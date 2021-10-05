anclas=document.anchors;// Deprecated
formularios=document.forms;
imagenes=document.images;
enlaces=document.links;

boton=document.getElementById("imprimir");
boton.addEventListener('click', imprimir);
function imprimir(){
    console.log("Anclas:")
    for (let i = 0; i < anclas.length; i++) {
        console.log(anclas[i]);
        
    }
    console.log("Formularios:")
    for (let i = 0; i < formularios.length; i++) {
        console.log(formularios[i]);
        
    }
    console.log("Imagenes:")
    for (let i = 0; i < imagenes.length; i++) {
        console.log(imagenes[i]);
        
    }
    console.log("Enlaces:")
    for (let i = 0; i < enlaces.length; i++) {
        console.log(enlaces[i]);
        
    }
}