// AOS
AOS.init();

// TYPING
new Typed(".typing",{
strings:[
"Backend Developer",
"Automation Specialist",
"Future Cybersecurity Engineer"
],
typeSpeed:60,
backSpeed:40,
loop:true
});

// ACCORDION
const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(acc => {

acc.addEventListener("click",function(){

this.classList.toggle("active");

const panel =
this.nextElementSibling;

if(panel.style.maxHeight){
panel.style.maxHeight = null;
}else{
panel.style.maxHeight =
panel.scrollHeight + "px";
}

});

});

// PARTICLES
particlesJS("particles-js",{
particles:{
number:{value:70},
size:{value:3},
color:{value:"#00bfff"},
line_linked:{
enable:true,
color:"#00bfff"
},
move:{
speed:2
}
}
});