//Validacion del formulario
nombre=document.getElementById("nombre");
correo=document.getElementById("correo");
dni=document.getElementById("dni");
fecha=document.getElementById("fechanac");
telefono=document.getElementById("telefono");
boton=document.getElementById("enviar")

volverLista=document.getElementById("volverLista");
volverLista.addEventListener('click', function(){
    window.location="listaPost.html";
})

const formIsValid = {
    nombre:false,
    correo:false,
    dni:false,
    fecha:false,
    telefono:false
}

boton.addEventListener('click', (e) =>{
    validar();
})

nombre.addEventListener('change', (e) =>{
    if (e.target.value.trim().length>1){
        formIsValid.nombre=true;
    }
    else {
        alert("El nombre introducido es incorrecto")
        formIsValid.nombre=false;
    }
})

correo.addEventListener('change', (e) =>{
    regex= /.*@+[a-zA-Z]+\.(com|es)/gi;
    if (regex.test(correo.value)){
        formIsValid.correo=true;
    }
    else {
        alert("El correo introducido es incorrecto")
        formIsValid.correo=false;
    }
})

dni.addEventListener('change', (e) =>{
    regex= /[1-9][0-9]{7,8}/gi;
    if (regex.test(dni.value) && dni.value.length==8){
        formIsValid.dni=true;
    }
    else {
        alert("El dni introducido es incorrecto");
        formIsValid.dni=false;
    }
})

fecha.addEventListener('change', (e) =>{
    var partes = fecha.value.split("-");

    if (partes[0]>1930 && partes[0]<2004){
        formIsValid.fecha=true;}

    else {
        alert("La fecha introducida no es correcta");
        formIsValid.fecha=false;
    }
    
})

telefono.addEventListener('change', (e) =>{
    regex= /[6-7][0-9]{8}/gi;
    if (regex.test(telefono.value)){
        formIsValid.telefono=true;
    }
    else{
        alert("El telefono introducido no es correcto");
        formIsValid.telefono=false;
    }
})

function validar(){
    valores=Object.values(formIsValid);
    valid=valores.findIndex(value => value == false);
    if(valid == -1) {
        alert("...ENVIANDO DATOS...");
        enviarDatos();
    } 
    else alert('El formulario presenta errores, reviselo');
}

function enviarDatos(){
    const nuevoUsuario={
        name:document.getElementById("nombre").value,
        mail:document.getElementById("correo").value,
        document:document.getElementById("dni").value,
        bdate:document.getElementById("fechanac").value,
        phone:document.getElementById("telefono").value
    }


    const peticion= new XMLHttpRequest();
    peticion.open('POST',"http://localhost:3000/users");
    peticion.setRequestHeader('Content-type', 'application/json');
    peticion.send(JSON.stringify(nuevoUsuario));
    window.location="listaPost.html";

}

