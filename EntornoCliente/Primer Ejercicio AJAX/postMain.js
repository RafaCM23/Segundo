titulo=document.getElementsByTagName("h1")[0];
contenido=document.getElementsByTagName("p")[0];


const peticion = new XMLHttpRequest();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
idPost=urlParams.get('id');

direccion='http://localhost:3000/posts?id='+idPost;
peticion.open('GET',direccion);
peticion.send();
peticion.addEventListener('load', function(){
    if(peticion.status==200){
        respuesta=JSON.parse(peticion.responseText)
        titulo.innerText=respuesta[0]["author"];
        contenido.innerText=respuesta[0]["content"];

        
        cargarComentarios(idPost)
    }
    else{ alert( +"Error: ("+respuesta.statusText+")"); 
    }
})



comentarios=document.getElementById("comentarios");


function cargarComentarios(idPost){
    //ya tenemos el id del post, ahora tenemos que cargar los comentarios de ese post
    const comentariosRecuperados=new XMLHttpRequest();
    direccion='http://localhost:3000/comments?postId='+idPost;
    comentariosRecuperados.open('GET',direccion);
    comentariosRecuperados.send();
    
    comentariosRecuperados.addEventListener('load',function(){
    if(comentariosRecuperados.status==200){
        let comentarios=JSON.parse(comentariosRecuperados.responseText);
        console.log(comentarios)
        imprimeComentarios(comentarios);
    }
    else{
        alert("Ha ocurrido un error al cargar los comentarios")
    }
    })

}
function imprimeComentarios(comentarios){
    principal=document.getElementById("comentarios");
    for (const i of comentarios) {
        caja=document.createElement("div");
        caja.classList.add("comentario");        

        caja.appendChild(creaAutor(i));
        caja.appendChild(creaContenido(i));
        //caja.appendChild(creaFecha(i));
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

}
//Aqui el formulario del nuevo comentario:

