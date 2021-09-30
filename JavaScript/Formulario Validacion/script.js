form=document.getElementsByTagName("form")[0];

nombre=document.getElementById("nombre");
apellidos=document.getElementById("apellidos");
correo=document.getElementById("correo");



//Para el campo oculto
hijos=document.getElementById("padre");
labeloculto=document.querySelector("label.oculto")
inputoculto=document.querySelector("input.oculto")


hijos.addEventListener('change', (e) =>{
    if (e.target.checked && labeloculto.classList.contains("oculto")) {
        labeloculto.classList.remove("oculto");
        inputoculto.classList.remove("oculto");
        inputoculto.removeAttribute('disabled',true)
    }
    else{
        labeloculto.classList.add("oculto");
        inputoculto.classList.add("oculto");
        inputoculto.setAttribute('disabled',true)
    }
}
)

const formIsValid = {
    nombre:false,
    apellidos:false,
    correo:false,
    hijos:false
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validar();
})

nombre.addEventListener('change', (e) => {
    if (nombre.trim.length>0) {
        
    }
})

const validar = () => {
    formValues = objet.values(formIsValid)
    valid= formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('El formulario tiene errores');
}