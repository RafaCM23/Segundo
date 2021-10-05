sig=document.getElementById("siguiente");
sig.addEventListener('click',siguiente);

ant=document.getElementById("anterior");
ant.addEventListener('click',anterior);

function siguiente(){

history.forward();
}

function anterior(){

    history.back();
}

console.log("Longitud: ",history.length);
console.log("Estado: ",history.state);