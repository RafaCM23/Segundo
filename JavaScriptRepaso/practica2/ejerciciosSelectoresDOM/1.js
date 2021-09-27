document.write('1-Hay ',document.querySelectorAll("a").length,' enlaces');

document.write('<br>2- ',document.querySelectorAll("a")[document.querySelectorAll("a").length-2].href);

document.write('<br>3- Hay ',document.querySelectorAll('a[href="http://prueba/"]').length, ' enlaces que llevan a http://prueba/')

document.write('<br>4- Hay ',document.querySelectorAll("p:nth-child(3) a").length,' enlaces en el tercer parrafo').length

//otra opcion   ->> document.querySelector("p:nth-child(3)").querySelectorAll("a").length

document.querySelector("p:nth-child(3)").querySelectorAll("a").length

