/*vamos a suponer que tenemos 10 posts
post=[
    "primero",
    "segundo",
    "tercero",
    "cuarto",
    "quinto",
    "sexto",
    "septimo",
    "ocatavo",
    "noveno",
    "decimo"
]
*/
listado=document.getElementById("listado")

//Vamos a recuperar los post que ya estan creados
const postRecuperados=new XMLHttpRequest();
postRecuperados.open('GET',"http://localhost:3000/posts");
postRecuperados.send();

postRecuperados.addEventListener('load',function(){
if(postRecuperados.status==200){
    let post=JSON.parse(postRecuperados.responseText);
    sacarPosts(post)
}
else{
    alert("Ha ocurrido un error al cargar los posts")
}
})

function sacarPosts(post){
barra=document.createElement("hr");
listado.appendChild(barra);
for (const i of post) {
    nuevafila=document.createElement("div");
    nuevafila.classList.add("seccion");
    barra=document.createElement("hr");
    info=`${i["title"]} - ${i["author"]}`,
    texto=document.createTextNode(info);
    
    nuevafila.appendChild(texto)
    listado.appendChild(nuevafila);

    boton=crearVer(i);
    listado.appendChild(boton);
    boton=crearBorrar(i);
    listado.appendChild(boton);

    listado.appendChild(barra);
   
}
}
//Hay que pasarle los valores del enlace para poder crear los botones correctamente
function crearBorrar(i){
    boton=document.createElement("input");
    boton.value="borrar";
    boton.setAttribute("type","button");
    boton.classList.add("boton1");
    return boton;
}
function crearVer(i){
    boton=document.createElement("input");
    boton.value="Ver";
    boton.setAttribute("type","button");
    direccion="http://localhost:3000/posts?id="+i['id']
    boton.classList.add("boton2");
    return boton;
    //arreglar que el boton se pueda clickar y abra otra pagina
}
