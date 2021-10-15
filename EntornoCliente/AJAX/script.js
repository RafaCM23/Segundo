boton=document.getElementById("consultar");
boton.addEventListener('click', consulta)
respuesta=document.getElementById("respuesta")
let comentarios;
function consulta(){

let peticion = new XMLHttpRequest();

console.log("Estado inicial de la petición: " + peticion.readyState);
peticion.open('GET', 'http://localhost:3000/comments');
console.log("Estado de la petición tras el 'open': " + peticion.readyState);
peticion.send();
console.log("Petición hecha");

peticion.addEventListener('readystatechange', function() {
console.log("Estado de la petición: " + peticion.readyState);
if (peticion.readyState === 4) {
if (peticion.status === 200) {
console.log("Datos recibidos:");
 comentarios = JSON.parse(peticion.responseText); // Convertirmos los datos JSON a un objeto
console.log(comentarios);


for (const i in comentarios) {
    respuesta.innerText+=(`id: ${comentarios[i]["body"]}`)
    respuesta.innetText+=(`Comentario: ${comentarios[i]["body"]}`)
    respuesta.innerText+=(`Creador: ${comentarios[i]["postId"]} \n`)
}
} else {
console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
}
}
})

console.log("Petición acabada");
}


// 1- Creacion de Usuarios (Nombre, tlf, dni) y verificar formulario
// 2- Lista de Post (Lista con nombre, autor y dos botones [Borrar y enlace al post(ver)])
// 3- Pagina con el post, el autor al final, y una seccion de comentarios con el comentario y el nombre del que ha comentado
// 3.1- Esa misma pagina permite hacer comentarios (Select de los usuarios para hacer los comentarios)

// -EXTRA- Pagina para crear los posts
