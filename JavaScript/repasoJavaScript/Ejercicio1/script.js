enviar=document.getElementById("enviar");
enviar.addEventListener('click',compruebaForm);

nickname=document.getElementById("nick");
nombre=document.getElementById("nombre");
password=document.getElementById("password");
denei=document.getElementById("dni");
edad=document.getElementById("edad");



function compruebaForm(e){
    e.preventDefault();
    
    var respuesta=validatePasswordModerate(password.value)
    //debe tener 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    if (respuesta==1){
        guardaUsuario();
        alert("Usuario Guardado");
    }
    else{alert("Contraseña incorrecta, debe contener 1 mayuscula, 1 minuscula, 2 numero y 8 de largo")};

}

function guardaUsuario(){
    console.log(nickname.value,nombre.value,password.value,denei.value,edad.value);
    const usuario ={
        nick:nickname.value,
        name:nombre.value,
        pass:password.value,
        dni:denei.value,
        age:edad.value,
        fechaAlta: new Date().toISOString().slice(0, 10)
    }

    localStorage.setItem(nickname.value,JSON.stringify(usuario));
    console.log("guardado");
}

borrar=document.getElementById("borrar");
borrar.addEventListener('click',borra);
function borra(){
    localStorage.clear();
}

consultar=document.getElementById("consultar");
consultar.addEventListener('click',consulta);

function consulta(e){
    e.preventDefault();
    var busca=localStorage.getItem(nickname.value);
    if(busca!=null){
        usu=JSON.parse(busca);
    }
    imprimeTabla(usu);
}

function imprimeTabla(user){
    
    body=document.getElementsByTagName("body")[0];
    tabla=document.getElementById("tabla");
    fila=document.createElement("tr");
    
    celda=document.createElement("td");celda1=document.createElement("td");celda2=document.createElement("td");
    celda3=document.createElement("td");celda4=document.createElement("td");celda5=document.createElement("td");

    celda.innerText=user.nick;fila.appendChild(celda);
    celda1.innerText=user.name;fila.appendChild(celda1);
    celda2.innerText=user.pass;fila.appendChild(celda2);
    celda3.innerText=user.dni;fila.appendChild(celda3);
    celda4.innerText=user.age;fila.appendChild(celda4);
    celda5.innerText=user.fechaAlta;fila.appendChild(celda5);

    tabla.appendChild(fila);

    

}

login=document.getElementById("ultimoLogin");
login.addEventListener('click',consultaLogin);

function consultaLogin(e){
    e.preventDefault();
    let ultimolog=Object.keys(localStorage)[0];
    
    for(let i=0; i<localStorage.length-1; i++){

        primero = localStorage.key(i);
        segundo = localStorage.key(i+1);
        
        user1=JSON.parse(localStorage.getItem(primero));
        user2=JSON.parse(localStorage.getItem(segundo));
        if(user1.fechaAlta>user2.fechaAlta){
            ultimolog=primero;
        }
    }
    var ultimoUser= JSON.parse(localStorage.getItem(ultimolog));
    console.log(ultimoUser);
    imprimeTabla(ultimoUser);
}


