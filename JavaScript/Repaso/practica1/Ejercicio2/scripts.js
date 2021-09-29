anadir= document.getElementById("add");
borrar= document.getElementById("del");

anadir.addEventListener('click',addEL);
borrar.addEventListener('click',delEl);

lista=document.getElementsByTagName("ul")[0];

function addEL(){
elemento=document.getElementById("elemento").value;
posicion=document.getElementById("pos").value;
li=document.createElement("li");

li.appendChild(document.createTextNode(elemento));
lista.insertBefore(li,lista.getElementsByTagName("li")[posicion-1]);
}

function delEl(){
posicion=document.getElementById("pos").value;
eliminado=lista.getElementsByTagName("li")[posicion-1];
lista.removeChild(eliminado);
}