provincias=["Sevilla","Cadiz","Huelva","Malaga","Granada","Almeria","Jaen","Cordoba"];
provincias.sort();

tabla=document.createElement("table");

for(var pro in provincias){
    nuevo=document.createElement("tr");
    celda=document.createElement("td");
    celda.innerText=provincias[pro];
    nuevo.appendChild(celda);
    tabla.appendChild(nuevo);
    document.body.appendChild(tabla);
}