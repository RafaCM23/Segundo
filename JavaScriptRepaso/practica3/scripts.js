caja= document.getElementById("box");
texto=document.getElementById("texto");
textolargo=document.getElementById("textolargo");


caja.addEventListener('mouseenter', () =>{
    caja.classList.replace("box","verde");
}
)

caja.addEventListener('mouseleave', () =>{
    caja.classList.replace("verde","box");
}
)
caja.addEventListener('mousedown', () =>{
    console.log("Has pulsado la caja");
}
)

caja.addEventListener('mouseup', () =>{
    console.log("Has soltado el botón izquierdo dentro de la caja");
}
)

texto.addEventListener('keydown', () =>
    console.log("Has pulsado una tecla"));
texto.addEventListener('keydown',letra);

texto.addEventListener('keyup', () =>
    console.log("Has soltado una tecla"));

function letra(e){
    console.log(e.code);
}





textolargo.addEventListener('keyup', contenido);

function contenido(e){
       
        console.log(e.key)
    }



