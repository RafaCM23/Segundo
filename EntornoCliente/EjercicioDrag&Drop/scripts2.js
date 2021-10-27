//Script optimizado mediante query
input=document.getElementById("in");
zonas=document.querySelectorAll("div[id='zona']");

zonas.forEach(el => {
    //1-Cuando sale de su zona
    el.addEventListener('dragstart', (e) =>{
        e.dataTransfer.setData('text/plain', e.target.id);
    });
    //2- Le añadimos el estilo de cuando esta en movimiento "active"
    el.addEventListener('drag', (e) => {
        e.target.classList.add('active')
    });
    //3- Se lo quitamos cuando deja de moverse
    el.addEventListener('dragend', (e) => {
        e.target.classList.remove('active')
    });
    //4- Añadimos los listener cuando las tareas hacen drop, pero poniendo antes el prevent default
    el.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    
    el.addEventListener('drop', (e) => {
        e.preventDefault()
        columna1=document.querySelector(".columna1");
        columna2=document.querySelector(".columna2");
        columna2=document.querySelector(".columna3");
       
        const element = document.getElementById(e.dataTransfer.getData('text'));
        element.classList.remove('active');
        padre=element.parentNode;
        el.appendChild(padre.removeChild(element));
        console.log(element);
        if(element.parentNode.matches(".columna1")){
            mueveGuarda("0",element);
        }
        else if(element.parentNode.matches(".columna2")){
            mueveGuarda("1",element);
        }
        else if(element.parentNode.matches(".columna3")){
            mueveGuarda("2",element);
        }
        else{alert("Fatal Error");}
        

    });
});

function mueveGuarda(padre,elemento){


    const tarea={
        id: elemento.attributes.id.value,
        body: elemento.innerText,
        pos: padre
    }

    guardarTarea(tarea);
}


//Cargar tareas de LocalStorage
window.addEventListener('load',recuperarTareas)
function recuperarTareas(){
    todas=Object.keys(localStorage).sort();
    if(todas.length>0){
    todas.forEach(task =>{
        //console.log(localStorage.getItem(task));
        pintarTarea(JSON.parse(localStorage.getItem(task)));
       
    })
}

}

//Cada vez que se le de enter al input de texto se añade la tarea
input.addEventListener('keyup', function(e){
    if(e.keyCode===13 && input.value.length>2 && input.value.length<30){
        crearTarea();
        
    }
    else if(e.keyCode===13)
    {alert("La tarea es muy corta o muy larga")};
})

function crearTarea(){

  
    const tarea={
        id: new Date().getTime(),
        body: input.value,
        pos: 0
    }
    

    console.log(tarea);
    guardarTarea(tarea);
    pintarTarea(tarea);


    

}
function guardarTarea(tarea){
    
    localStorage.setItem(`${tarea.id}`,JSON.stringify(tarea));
}

function pintarTarea(tarea){

    nuevaTarea=document.createElement("div");
    nuevaTarea.setAttribute("id",tarea.id);
    nuevaTarea.setAttribute("class","task");
    nuevaTarea.setAttribute("draggable",true);
    nuevaTarea.innerText=tarea.body;
    
    zonas[tarea.pos].appendChild(nuevaTarea);
   // <div id="tarea1" class="task" draggable="true">Tarea 1</div>
}





