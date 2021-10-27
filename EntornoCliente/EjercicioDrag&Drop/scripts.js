tareasPendientes = document.getElementById('pendientes');
tareasEnProceso = document.getElementById('enProceso');
tareasAcabadas = document.getElementById('acabadas');


//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener

//vamos a añadir los mismos listener a los 3 luego hay que intentar reducirlo con selectores
//1-Cuando sale de su zona
tareasPendientes.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
});

tareasEnProceso.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
});

tareasAcabadas.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
});


//2- Le añadimos el estilo de cuando esta en movimiento "active"
tareasPendientes.addEventListener('drag', (e) => {
    e.target.classList.add('active')
});

tareasEnProceso.addEventListener('drag', (e) => {
    e.target.classList.add('active')
});

tareasAcabadas.addEventListener('drag', (e) => {
    e.target.classList.add('active')
});



//3- Se lo quitamos cuando deja de moverse
tareasPendientes.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
});

tareasEnProceso.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
});

tareasAcabadas.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
});



//4- Añadimos los listener cuando las tareas hacen drop, pero poniendo antes el prevent default
//porque sino no funciona
tareasPendientes.addEventListener('dragover', (e) => {
    e.preventDefault();
});

tareasPendientes.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'));
    element.classList.remove('active');
    padre=element.parentNode;
    tareasPendientes.appendChild(padre.removeChild(element));
});


tareasEnProceso.addEventListener('dragover', (e) => {
    e.preventDefault();
});

tareasEnProceso.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    element.classList.remove('active');
    padre=element.parentNode;
    tareasEnProceso.appendChild(padre.removeChild(element));
});


tareasAcabadas.addEventListener('dragover', (e) => {
    e.preventDefault();
});

tareasAcabadas.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    element.classList.remove('active');
    padre=element.parentNode;
    tareasAcabadas.appendChild(padre.removeChild(element));
    
    
});