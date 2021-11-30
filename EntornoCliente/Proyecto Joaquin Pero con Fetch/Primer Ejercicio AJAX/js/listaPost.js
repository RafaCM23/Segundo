
listado = document.getElementById("listado")

volverCreacion=document.getElementById("volverCreacion");
volverCreacion.addEventListener('click', function(){
    window.location="creacionUsuarios.html";
})


//Vamos a recuperar los post que ya estan creados

fetch('http://localhost:3000/posts')
  .then(response => response.json()) 
  .then(myData => {sacarPosts(myData)}) 
  .catch(err => console.error(err));
  
  
  
function sacarPosts(post) {
    barra = document.createElement("hr");
    listado.appendChild(barra);
    for (const i of post) {
        nuevafila = document.createElement("div");
        nuevafila.classList.add("seccion");
        barra = document.createElement("hr");
        info = `${i["title"]} - ${i["author"]}`,
            texto = document.createTextNode(info);

        nuevafila.appendChild(texto)
        listado.appendChild(nuevafila);

        boton = crearVer(i);
        listado.appendChild(boton);
        boton = crearBorrar(i);
        listado.appendChild(boton);

        listado.appendChild(barra);


    }
    boton = crearUltimoBoton();
    botones=document.querySelectorAll("input[class='boton1']")
    botones.forEach(input => input.addEventListener('click',borrar));
    listado.appendChild(boton)
}
//Hay que pasarle los valores del enlace para poder crear los botones correctamente
function crearBorrar(i) {
    boton = document.createElement("input");
    boton.value = "borrar";
    boton.setAttribute("type", "button");
    boton.classList.add("boton1");
    boton.id = i["id"];

    return boton;

}

//hacer query con todos los botones. ponerle listener y luego comprobar que borra el id que quiero
//event.target matche(a.borrar)

function borrar(e) {
    id=e.target.id;
    direccion = `http://localhost:3000/posts/${id}`
    fetch(direccion, {
        method: 'DELETE'})
      .then(response => {
        if (response.ok) {
          alert("Post Borrado");
          window.location.reload();

        }
        return Promise.reject(response) 
      })
      .then(datos => datosServidor=datos)
      .catch(err => {
        console.log('Error al borrar: '+err.message);
      })



}





function crearVer(i) {
    boton = document.createElement("input");
    boton.value = "Ver";
    boton.setAttribute("type", "button");
    direccion = `'postMain.html?id=${i['id']}'`
    boton.classList.add("boton2");
    boton.setAttribute("onclick", `window.location=${direccion}`);
    return boton;

}
function crearUltimoBoton() {
    boton = document.createElement("input");
    boton.value = "Nuevo Post";
    boton.setAttribute("type", "button");
    direccion = `'creacionPost.html'`;
    boton.classList.add("boton3");
    boton.setAttribute("onclick", `window.location=${direccion}`);
    return boton;
}
