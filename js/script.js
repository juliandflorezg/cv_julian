
// INICIALIZAR LIBRERÍA AOS

// AOS (Animate On Scroll)
// Permite ejecutar animaciones automáticamente cuando el usuario hace scroll en la página.
AOS.init();

// TYPING
// Typed.js crea el efecto dinámico de texto escribiéndose automáticamente.
new Typed(".typing",{
strings:[
"Backend Developer",
"Automation",
"Future Software Engineer",
"Cybersecurity Enthusiast"
],
// Velocidad al escribir letras.
typeSpeed:60,
// Velocidad al borrar letras.
backSpeed:40,
// Repetir infinitamente.
loop:true
});

// ACCORDION DESPLEGABLE
// Selecciona TODOS los elementos que tengan la clase .accordio
const accordions =
document.querySelectorAll(".accordion");
// Recorre cada acordeón encontrado
accordions.forEach(acc => {
// Agrega evento click a cada botón
acc.addEventListener("click",function(){
// Agrega o quita la clase active para cambiar estilos visuales.
this.classList.toggle("active");

const panel =
this.nextElementSibling;
 // Si el panel YA está abierto, se cierra.
if(panel.style.maxHeight){
panel.style.maxHeight = null;
}else{
panel.style.maxHeight =
panel.scrollHeight + "px";
}

});

});

// PARTICLES Genera partículas animadas en el fondo de la página para dar apariencia tecnológica.
particlesJS("particles-js",{
particles:{
// Cantidad de partículas    
number:{value:70},
// Tamaño de partículas
size:{value:3},
color:{value:"#00bfff"},
// Líneas que conectan partículas
line_linked:{
//activa lineas    
enable:true,
color:"#00bfff"
},
move:{
speed:2
}
}
});