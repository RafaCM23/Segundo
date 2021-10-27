titulo=document.getElementById("titulo");
autor=document.getElementById("autor");
contenido=document.getElementById("contenido");

boton=document.getElementById("boton");
volverLista=document.getElementById("volverLista");
volverLista.addEventListener('click', function(){
    window.location="listaPost.html";
})


boton.addEventListener('click', comprobar);

const formIsValid = {
    titulo:false,
    autor:false,
    contenido:false
}



titulo.addEventListener('change', (e)=>{
    if(titulo.value.trim().length>1){
        formIsValid.titulo=true;
    }
    else{
        alert("El titulo debe tener minimo 2 caracteres");
        formIsValid.titulo=false;
    }
})

autor.addEventListener('change', (e)=>{
    if(autor.value.trim().length>1){
        formIsValid.autor=true;
    }
    else{
        alert("El autor debe tener minimo 2 caracteres");
        formIsValid.autor=false;
    }
})

contenido.addEventListener('change', (e)=>{
    if(contenido.value.trim().length>9){
        formIsValid.contenido=true;
    }
    else{
        alert("El contenido del post debe tener minimo 10 caracteres");
        formIsValid.contenido=false;
    }

})

function comprobar(){

    valores=Object.values(formIsValid);
    valid=valores.findIndex(value => value == false);
    if(valid == -1) {
        alert("...ENVIANDO DATOS...");
        enviarDatos();
    } 
    else alert('El formulario presenta errores, reviselo');    
}

function enviarDatos(){

    const nuevopost={
        title:document.getElementById("titulo").value,
        author:document.getElementById("autor").value,
        content:document.getElementById("contenido").value
    }

    const peticion=new XMLHttpRequest();
    peticion.open('POST',"http://localhost:3000/posts")
    peticion.setRequestHeader('Content-type','application/json');
    peticion.send(JSON.stringify(nuevopost))
    window.location="listaPost.html";
}




