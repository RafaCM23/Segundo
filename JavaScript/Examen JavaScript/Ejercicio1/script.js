nombre=document.getElementById("nombre");
apellidos=document.getElementById("apellidos");
nick=document.getElementById("login");
pass=document.getElementById("password");
fecha=document.getElementById("fechanac");



nombre.addEventListener('change',sugerir);
function sugerir(){
    fetch('https://intranetjacaranda.es/pruebaJS/arrayNombres.php?nombre='+nombre.value)
    .then(response =>{
        if(response.ok){
            return response.text();
        }
        
    })
    .then(datos => manejo(datos))
    .catch(err => console.log(err))
    
}
sugerencias=document.getElementById("sugerencias");
function manejo(data){
    sugerencias.innerText="";
    texto=document.createTextNode(data);
    sugerencias.appendChild(texto);
    
    
}

const formIsValid={
    apellidos:false,
    login:false,
    passw:false,
    fechan:false
}


login.addEventListener('change', opciones);
function opciones(){


    const datos= new FormData();
    datos.append('login',nick.value)
    const peticion= new XMLHttpRequest();
    peticion.open('POST','https://intranetjacaranda.es/pruebaJS/checkLogin.php');
    peticion.send(datos);
    peticion.addEventListener('load', function(){
        if(peticion.status==200){
            res=peticion.responseText;
            controlaRespuesta(res);
        }
    })
}
alternativas=document.getElementById("alternativas");
function controlaRespuesta(respuesta){
    const parser = new DOMParser();
    const xml = parser.parseFromString(respuesta, "application/xml");
    let disponible = xml.getElementsByTagName('disponible');
    let alt = xml.getElementsByTagName('login');
    
    if(disponible[0].textContent=='si'){
        alert("El login esta disponible")
        formIsValid.login=true;
    }
    else{
        alert("El login no esta disponible, pruebe con alguno de los sugeridos")
        formIsValid.login=false;
        for (let i = 0; i < alt.length; i++) {
           li=document.createElement("li");
           li.innerText=alt[i].textContent;
           alternativas.appendChild(li);
        }
        
    }
}




apellidos.addEventListener('change',compruebaApellido);

function compruebaApellido(){
    
    const apellidoRegex=/[a-zA-Z]{2,}\s[a-zA-Z]{2,}/gi //debe tener minimo dos palabras de dos letras
    if(apellidoRegex.test(apellidos.value)){
       
        formIsValid.apellidos=true;
    }
    else{alert("Apellido incorrecto")
        formIsValid.apellidos=false
    }   
     

}


pass.addEventListener('change',compruebaContra);
function compruebaContra(){
    const contraRegex=/[a-zA-Z]{6,}[0-9]{2,}/gi //contiene minimo 6 letras y minimo 2 numeros
    if(contraRegex.test(pass.value)){
        formIsValid.passw=true;
    }
    else{
        alert("La contraseña debe contner 6 letras y 2 numeros")
        formIsValid.passw=false;
    }
}

fecha.addEventListener('change',compruebaEdad);
function compruebaEdad(){
    nacimiento=fecha.value;
    valida='2003-11-17';
    if(valida<nacimiento){
        alert("Debes ser mayor de edad");
        formIsValid.fechan=false;
    }else{
        formIsValid.fechan=true;
    }

}




boton=document.getElementById("boton");
boton.addEventListener('click',guardar);

function guardar(e){
    e.preventDefault();
    formValues=Object.values(formIsValid);
    const valid= formValues.findIndex(value=>value==false);
    if(valid==-1) {  creaUsuario();  }
    else { alert("El formulario presenta errores"); }
    
}

function creaUsuario(){
    alert("usuario Creado")

    
    usuario ={
        name:nombre.value,
        app:apellidos.value,
        login:nick.value,
        password:pass.value,
        edad: calculaEdad(),
        fechaAlta:new Date()
    }
    localStorage.setItem(nick.value,JSON.stringify(usuario));
}

function calculaEdad(){//calcula edad sin contar los meses
    hoy=new Date();

    aniohoy=hoy.getFullYear();
    aniofecha=fecha.value.slice(0,4)
    return aniohoy-aniofecha;
}


borrar=document.getElementById("borrar");
consultar=document.getElementById("consultar")
ultimoCreado=document.getElementById("ultimoCreado");

borrar.addEventListener('click',borra);

function borra(){
    localStorage.clear();
}

consultar.addEventListener('click',consulta);
function consulta(e){
    e.preventDefault();
    if(localStorage.getItem(nick.value)){
        usuario=JSON.parse(localStorage.getItem(nick.value))
        imprimeTabla(usuario);
    }
}   
ultimoCreado.addEventListener('click', consultaUltimo);
function consultaUltimo(e){
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
    
    imprimeTabla(ultimoUser);
}


function imprimeTabla(usuario){
    tabla=document.getElementById("tabla")
        
        tr=document.createElement("tr");
        td=document.createElement("td");
        td.innerText=usuario.name;
        td1=document.createElement("td");
        td1.innerText=usuario.app;
        td2=document.createElement("td");
        td2.innerText=nick.value;
        td3=document.createElement("td");
        td3.innerText=usuario.edad;
        td4=document.createElement("td");
        td4.innerText=usuario.fechaAlta;
        tr.appendChild(td);tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);
        tabla.appendChild(tr);
}