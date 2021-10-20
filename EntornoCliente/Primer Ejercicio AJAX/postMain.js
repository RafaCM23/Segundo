titulo=document.getElementsByTagName("h1")[0];
contenido=document.getElementsByTagName("p")[0];


const peticion = new XMLHttpRequest();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

direccion='http://localhost:3000/posts?id='+urlParams.get('id');
peticion.open('GET',direccion);
peticion.send();
peticion.addEventListener('load', function(){
    if(peticion.status==200){
        respuesta=JSON.parse(peticion.responseText)
        titulo.innerText=respuesta[0]["author"];
        contenido.innerText=respuesta[0]["content"];
    }
    else{ alert( +"Error: ("+respuesta.statusText+")"); 
    }
})




