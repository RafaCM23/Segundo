tabla = document.getElementById("tabla");

boton = document.getElementById("insertar");
boton.addEventListener('click', insertar);

boton2 = document.getElementById("borrar");
boton2.addEventListener('click', borrar);

boton3=document.getElementById("modificar");
boton3.addEventListener('click',modificar);


function insertar() {
    deneises = document.querySelectorAll('td:nth-child(2)');
    filas = document.getElementById("tabla").childNodes[3];
    actualizarvalores();

    existe = false;
    for (let i = 0; i < deneises.length; i++) {
        if (deneises[i].innerText == dni) {
            alert("Ese empleado ya existe")
            existe = true
        }
    }

    if (existe == false) {
        creartabla();

        fila = document.createElement("tr");
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);

        filas.appendChild(fila);

        contador = deneises.length
        tabla.childNodes[1].innerText = ('Número total de empleados: ' + contador);

    }
}

function borrar() {
    deneises = document.querySelectorAll('td:nth-child(2)');
    filas = filas = document.querySelectorAll("tr")
    dni = document.getElementById("dni").value;
    existe = false;
    for (let i = 0; i < deneises.length; i++) {
        if (deneises[i].innerText == dni) {
            tabla.childNodes[3].removeChild(filas[i]);
            existe = true;
        }
    }
    if (existe == false) {
        alert("Ese empleado no existe");
    }

}

function modificar() {
    deneises = document.querySelectorAll('td:nth-child(2)');
    filas = filas = document.querySelectorAll("tr")

    actualizarvalores();

    creartabla();

    nueva = document.createElement("tr");
    nueva.appendChild(celda1);
    nueva.appendChild(celda2);
    nueva.appendChild(celda3);
    nueva.appendChild(celda4);
    existe=false;
    for (let i = 0; i < deneises.length; i++) {
        if (deneises[i].innerText == dni) {
            existe = true;
            filas[i].children[0].innerText=numero;
            filas[i].children[2].innerText=nombre;
            filas[i].children[3].innerText=apellidos;
        }
    }
    if (existe==false) {
        alert("Ese empleado no existe");
    }
}

function actualizarvalores(){
    numero = document.getElementById("numero").value;
    dni = document.getElementById("dni").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;

}
function creartabla(){
    celda1 = document.createElement("td")
    celda2 = document.createElement("td")
    celda3 = document.createElement("td")
    celda4 = document.createElement("td")

    celda1.innerText = numero;
    celda2.innerText = dni;
    celda3.innerText = nombre;
    celda4.innerText = apellidos;
}