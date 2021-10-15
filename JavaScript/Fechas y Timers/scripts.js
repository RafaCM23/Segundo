
//  --1--
fecha=document.getElementById("date");
hora=document.getElementById("time");
respuesta1=document.getElementById("respuesta1");

fecha.addEventListener('change', (e) =>{
    diaSemana=fecha.valueAsDate.getDay()
    dia=fecha.valueAsDate.getDate()
    mes=fecha.valueAsDate.getMonth()
    respuesta1.innerText=`Hoy es ${dias[diaSemana]}, ${dia} de ${meses[mes]}`;
})
hora.addEventListener('change', (e) =>{
    respuesta1.innerText+=` y son las ${hora.value}`
})

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abrl',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
  ]

//  --2--

mes2=document.getElementById("mes2");
anio=document.getElementById("anio");
respuesta2=document.getElementById("respuesta2");

mes2.addEventListener('change', (e) => {
    if (anio.value!='') {
        sacarCalendario();
    }
})
anio.addEventListener('change', (e) =>{
    if (mes2.value!='') {
        sacarCalendario();
    }
})
function sacarCalendario(){
    respuesta2.innerText='';
    nuevafecha= new Date(anio.value,meses.indexOf(mes2.value),1);
    for (let i = 0; i <nuevafecha.getDate(); i++) {
        respuesta2.innerText+=(`(${nuevafecha.getDate()})${dias[nuevafecha.getDay()]}, `)
        nuevafecha.setDate(nuevafecha.getDate()+1);
    }
}


//    --3--

fecha=document.getElementById("fecha3");
demora=document.getElementById("demora");

fecha.addEventListener('change', (e) =>{
    if (demora.value!='') {
        fechaPago();
    }
})
demora.addEventListener('change', (e) =>{
    if (fecha.value!='') {
        fechaPago();
    }
})

function fechaPago(){
    
    dia=fecha3.valueAsDate.getDate()+demora.valueAsNumber
    mes=fecha3.valueAsDate.getMonth()
    anio=fecha3.valueAsDate.getFullYear()
    nuevafecha= new Date(anio,mes,dia)
    //-------------
    dia=nuevafecha.getDate()
    mes=nuevafecha.getMonth()
    anio=nuevafecha.getFullYear()

    respuesta3.innerText=`El dia de pago es el ${(dia)}/${mes+1}/${anio}`;
}

//    --4--
respuesta4=document.getElementById("respuesta4");
setInterval(()=>{
    cronometro();
},1000)

function cronometro(){
    actual= new Date();
    diaactual=actual.getDate();
    mesactual=actual.getMonth();
    anioactual=actual.getFullYear();
    crono=actual.toLocaleTimeString('it-IT');
    respuesta4.innerText=`Hoy es ${diaactual}-${mesactual}-${anioactual} y son las ${crono}`;
}

//    --5--
horaminuto();
alarma=document.getElementById("alarma")

alarma.addEventListener('change', (e)=>
{
    if (alarm) {
        
    }
})









function horaminuto(){
    now=new Date();
    var localeSpecificTime = now.toLocaleTimeString();
    horaactual.innerText=localeSpecificTime.replace(/:\d+ /, ' ');
    
}

//now.toLocaleTimeString()
//alarma.valueAsDate.toLocaleTimeString()