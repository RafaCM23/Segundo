boton=document.getElementById("boton");


boton.addEventListener('click', colorear);

function colorear(){
    fila=document.getElementById("fila").value;
    columna=document.getElementById("columna").value;
    x=parseInt(fila);
    y=parseInt(columna);

    celda=document.querySelector(`table tr:nth-child(${x}) td:nth-child(${y})`);
    celda.classList.add("rojo");
}


