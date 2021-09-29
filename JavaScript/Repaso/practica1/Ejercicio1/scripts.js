window.onload=function(){
    
    boton = document.getElementById('aplicar');
    tabla = document.getElementById('tabla');
    
    boton.addEventListener('click', addLinea);
    
    
    function addLinea(){

    pos= document.getElementById('pos').value;
    equipo= document.getElementById('equipo').value;
    puntos= document.getElementById('puntos').value;
      
    if (tabla.getElementsByTagName("tr").length>pos){
    filas=tabla.getElementsByTagName("tr");
    celdas= filas[pos].getElementsByTagName("td");
    celdas[0].innerText=pos;
    celdas[1].innerText=equipo;
    celdas[2].innerText=puntos;
  }
    
    else{
        tabla.insertRow(-1).innerHTML='<td></td><td></td><td></td>';
        nueva=tabla.getElementsByTagName("tr")[tabla.getElementsByTagName("tr").length-1].getElementsByTagName("td");
        nueva[0].innerText=pos;
        nueva[1].innerText=equipo;
        nueva[2].innerText=puntos;
      }
    
    }

  }
