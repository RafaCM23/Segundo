consulta=document.getElementById("consulta");
consulta.addEventListener('click',consultar);



select=document.getElementById("select");
function consultar(e){
    e.preventDefault();
    

    if(select.value=='' || select.value==null){
    
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response =>{
                if(response.ok){
                    return response.json();
                } 
            })
                
            .then(datos => rellenaLista(datos))
            .catch(err => console.error(err));
    
    }
    else{
        
        fetch(`http://jsonplaceholder.typicode.com/users?id=${select.value}`)
        .then(response =>{
            if(response.ok){
                return response.json();
            } 
        })
            
        .then(datos => pintaTabla(datos))
        .catch(err => console.error(err));
    }


}


function rellenaLista(datos){
    datos.forEach(e => {
        opcion=document.createElement("option");
        opcion.value=e["id"]; opcion.innerText=e["name"];
        select.appendChild(opcion);
    });

}

function pintaTabla(usuario){
    user=usuario[0];
    body=document.getElementsByTagName("body")[0];

    tabla=document.createElement("table");
    fila=document.createElement("tr");
    
   celda=document.createElement("td");
   celda.innerText=user["id"];
   celda1=document.createElement("td");
   celda1.innerText=user["name"];
   celda2=document.createElement("td");
   celda2.innerText=user["username"];
   celda3=document.createElement("td");
   celda3.innerText=user["email"];

   fila.appendChild(celda);fila.appendChild(celda1);
   fila.appendChild(celda2);fila.appendChild(celda3);
   tabla.appendChild(fila); body.appendChild(tabla);
}
//para Hacer Post

/* 

fetch( ~URL~, {
  method: 'POST', 
  body: JSON.stringify(~data~), // los datos que enviamos al servidor en el 'send'
  headers:{
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response) 
})
.then(datos => datosServidor=datos)
.catch(err => {
  console.log('Error en la petición HTTP: '+err.message);
})



*/