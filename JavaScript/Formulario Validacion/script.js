form=document.getElementsByTagName("form")[0];

nombre=document.getElementById("nombre");
apellidos=document.getElementById("apellidos");
correo=document.getElementById("correo");
sexo=document.getElementById("divsexo");

//Para el campo oculto
hijos=document.getElementById("padre");
labeloculto=document.querySelector("label.oculto")
inputoculto=document.querySelector("input.oculto")


hijos.addEventListener('change', (e) =>{
    if (e.target.checked && labeloculto.classList.contains("oculto")) {
        labeloculto.classList.remove("oculto");
        inputoculto.classList.remove("oculto");
        inputoculto.removeAttribute('disabled',true);
        document.querySelector("input[type='number']").value=1;
    }
    else{
        labeloculto.classList.add("oculto");
        inputoculto.classList.add("oculto");
        inputoculto.setAttribute('disabled',true)
        document.querySelector("input[type='number']").value=0;
    }
}
)

const formIsValid = {
    nombre:false,
    apellidos:false,
    correo:false,
    sexo:false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validar();
})

nombre.addEventListener('change', (e) => {
    if (e.target.value.trim().length>2) {
        formIsValid.nombre = true;
    }
    else{
        alert("El nombre no es correceto")
        formIsValid.nombre = false;
    }
})
apellidos.addEventListener('change', (e) => {
    if (e.target.value.trim().length>2) {
        formIsValid.apellidos = true;
    }
    else{
        alert("El apellidos no es correceto")
        formIsValid.apellidos = false;
    }
})
correo.addEventListener('change', (e) => {
    regex= /.*@+[a-zA-Z]+\.(com|es)/gi;
    if (regex.test(correo.value)) {
        formIsValid.correo = true;
    }
    else{
        alert("El correo no es correceto")
        formIsValid.correo = false;
    }
})
sexo.addEventListener('change', (e) =>{
    sexos=document.querySelectorAll("input[name='sexo']")
    
    if(sexos[1].checked || sexos[0].checked){
        formIsValid.sexo=true;
    }
    else{
        alert("Seleccione un sexo");
        formIsValid.sexo=false;
    }
})



const validar = () => {
    formValues = Object.values(formIsValid)
    valid= formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('El formulario tiene errores');
}








