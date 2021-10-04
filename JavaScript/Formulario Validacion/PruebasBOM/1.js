//1 Mover y redimensionar la ventana de diferentes maneras en 2 navegadores
crear=document.getElementById("crear");
cerrar=document.getElementById("cerrar");
grande=document.getElementById("grande");
peque=document.getElementById("peque");
crear.addEventListener('click', (e) =>{
    ventana=window.open("","VENTANA","width=100", "height=100");
});
grande.addEventListener('click', (e) =>{
    ventana.resizeBy(150,100);
});
peque.addEventListener('click', (e)  =>{
    ventana.resizeBy(-100,-50);
});

izquierda.addEventListener('click', (e) =>{
    ventana.moveBy(-10,0);
 
});
derecha.addEventListener('click', (e) =>{
    ventana.moveBy(10,0);
});
arriba.addEventListener('click', (e) =>{
    ventana.moveBy(0,-10);
})
abajo.addEventListener('click', (e) => {
    ventana.moveBy(0,10);
})
cerrar.addEventListener('click', (e) =>{
    ventana.close();
})


