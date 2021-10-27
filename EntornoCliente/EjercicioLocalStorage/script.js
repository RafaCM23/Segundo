input=document.getElementById("nuevaTarea");
enviar=document.getElementById("enviar");
enviar.addEventListener('click', function(e){
    if(input.value.length>1 && input.value.length<45){
        crearTarea();
        
    }
    else{alert("La tarea es muy corta o muy larga")};
});

lista=document.getElementById("lista");
input.addEventListener('keyup', function(e){
    if(e.keyCode===13 && input.value.length>1 && input.value.length<50){
        crearTarea();
        
    }
    else if(e.keyCode===13)
    {alert("La tarea es muy corta o muy larga")};
})

//Recuperar las tareas del localstorage


window.addEventListener('load',recuperarTareas);
function recuperarTareas(){
    todas=Object.keys(localStorage).sort();
    if(todas.length>0){
    todas.forEach(task =>{
        console.log(localStorage.getItem(task));
        pintarTarea(JSON.parse(localStorage.getItem(task)));
        crearBotones();
    })
}
}

function guardarTarea(tarea){
    
    localStorage.setItem(`${tarea.id}`,JSON.stringify(tarea));
}


function crearTarea(e){

    const tarea ={
        id: new Date().getTime(),
        body: input.value,
        checked:false
    }
    guardarTarea(tarea);
    pintarTarea(tarea);

}

function pintarTarea(tarea){
    nuevaFila=document.createElement("li");
    nuevaFila.setAttribute("id",tarea.id);
    nuevaFila.innerHTML=`<input type="checkbox" id="${tarea.id}" ${tarea.checked ? "checked" : ""}>
     <label>${tarea.body}</label>
     
     <img src="cruz.png" alt="cruz" width="30" height"30" id="${tarea.id}">
   `// <input type="button" id="${tarea.id}" title="Borrar" class="borrar"
   if(tarea.checked){
       nuevaFila.classList.add("tachado");
   };
    
    lista.appendChild(nuevaFila); 
    crearBotones();

}




function crearBotones(a){
   
    fotos=document.querySelectorAll("li img");
    fotos.forEach(element => {
        element.addEventListener('click', borrar)
    });

    cajitas=document.querySelectorAll("input[type='checkbox']");
    cajitas.forEach(element => {
        element.addEventListener('change',tachar)
        
    })
}

function borrar(e){
    localizar=`li[id='${e.target.id}']`
    localizado=document.querySelector(localizar);
    
    if(localizado.matches(".tachado")){
        localStorage.removeItem(e.target.id);
        lista.removeChild(localizado);
    }
    else{alert("Tienes que acabar la tarea primero");}
    
}

function tachar(e){
    id=e.target.id;
    li=document.querySelector(`li[id='${id}']`);
    if(e.target.checked){
        li.classList.add("tachado");
        
    }
    else{
        li.classList.remove("tachado");
    }    
    guardarEstado(id);
}

function guardarEstado(ide){
    cuadrito=document.querySelector(`li[id='${ide}'] input[type='checkbox']`);
    cuerpo=document.querySelector(`li[id='${ide}'] label`).innerText;
    const tarea ={
        id:ide,
        body: cuerpo,
        checked:cuadrito.checked
    }
    guardarTarea(tarea);
}
