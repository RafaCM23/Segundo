titulo=document.getElementsByTagName("h1")[0];
cuerpo=document.getElementsByTagName("p")[0];



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
idPost=urlParams.get('id');



      //  respuesta=JSON.parse(peticion.responseText)
    // titulo.innerText=respuesta[0]["author"];
      //  contenido.innerText=respuesta[0]["content"];

        
datos=null; 

direccion='http://localhost:3000/posts?id='+idPost;
fetch(direccion)
  .then(response => response.json()) 
  .then(myData => {
      titulo.innerText=myData[0]["title"];
      cuerpo.innerText=myData[0]["content"]
}) 
  .catch(err => console.error(err));

  cargarComentarios(idPost);


comentarios=document.getElementById("comentarios");


function cargarComentarios(idPost){
    //ya tenemos el id del post, ahora tenemos que cargar los comentarios de ese post
    direccion='http://localhost:3000/comments?postId='+idPost;
    fetch(direccion)
  .then(response => response.json()) 
  .then(myData => {
      comentarios=myData;
      imprimeComentarios(comentarios);
}) 
  .catch(err => console.error(err));

}
function imprimeComentarios(comentarios){
    principal=document.getElementById("comentarios");
    for (const i of comentarios) {
        caja=document.createElement("div");
        caja.classList.add("comentario");        

        caja.appendChild(creaAutor(i));
        caja.appendChild(creaContenido(i));
        caja.appendChild(creaFecha(i));
       
        principal.appendChild(caja);
    }
}


function creaAutor(comentario){
    autor=document.createElement("p");
    autor.classList.add("autor");
    autor.innerText=comentario["author"];
    return autor;
}

function creaContenido(comentario){
    contenido=document.createElement("p");
    contenido.classList.add("contenido");
    contenido.innerText=comentario["body"];
    return contenido;
}
//falta crear la fecha y obtenerla
function creaFecha(comentario){
    fecha=document.createElement("p");
    fecha.classList.add("fecha");
    fecha.innerText=comentario["date"];
    return fecha
}



//Aqui el formulario del nuevo comentario:
usuarios=document.getElementById("usuarios");

direccion='http://localhost:3000/users';
fetch(direccion)
.then(response => response.json()) 
.then(myData => {
  users=myData;
  listaUsuarios(users);
}) 
.catch(err => console.error(err));


function listaUsuarios(users){
    users.forEach(element => {
        usuarios.innerHTML+=`<option value="${element.name}">${element.name}</option>`;
    });
}

contenidoComentario=document.getElementById("contenidoComentario");
enviar=document.getElementById("enviar");
hoy=new Date();


enviar.addEventListener('click', function(){
if(usuarios.value!=null && !contenidoComentario.value=="" && contenidoComentario.textLength>2 ){
    fecha=`${hoy.getFullYear()}-${hoy.getMonth()}-${hoy.getDate()}`;
    const nuevoComentario={
        author:usuarios.value,
        postId:idPost,
        body:contenidoComentario.value,
        date:fecha

    }
  



    fetch("http://localhost:3000/comments", {
        method: 'POST', 
        body: JSON.stringify(nuevoComentario), // los datos que enviamos al servidor en el 'send'
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          alert("Comentario enviado");
          window.location.reload();

        }
        return Promise.reject(response) 
      })
      .then(datos => datosServidor=datos)
      .catch(err => {
        console.log('Error en la petición HTTP: '+err.message);
      })

}
else{
    alert("Compruebe que los campos del comentario son correctos");
}

})