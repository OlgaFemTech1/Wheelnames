let nombres = ["Alisa","Amanda","Ana G","Ana L", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sonia", "Taiza", "Yasmín"
];
function voluntario(){
    const positionRandom = Math.floor(Math.random()*nombres.length);
    const randomItem = nombres[positionRandom];
    console.log(randomItem);
    nombres.splice(positionRandom,1);
    const padre = document.getElementById("lista").getElementsByTagName("ul")[0];//solo tengo 1 ul//
    const hijo = padre.getElementsByTagName("li")[positionRandom];
    padre.removeChild(hijo);

    const elegida = document.getElementById("candidata");
    elegida.innerHTML = randomItem;

    if (nombres.length === 0) {
      elegida.innerHTML = "Pulsa el botón Recargar";
   }
   // document.body.innerHTML = (randomItem);

}
/*const cucanyarota = [
    { transform: 'rotate(0) translate3D(-1%, -1%, 0)' },

    { transform: 'rotate(360deg) translate3D(-1%, -1%, 0)'  }
];

const duracion = {
    duration: 2000,
    iterations: 10,
    delay: 1000
}

document.getElementById("cucanya").animate(
    cucanyarota,
    duracion
)*/

const cucanya =document.getElementById("cucanya");
cucanya.animate([
    { transform: 'scale(1.1)',opacity: 1 },
    { transform: 'scale(.75)' , opacity: .65 },
    { transform: 'scale(1.1)' , opacity: 1 },
    ], {
    duration: 2500,
    delay: 100,
    easing: 'ease-in-out',
    iterations: Infinity,
    direction: 'alternate'
});
let audio = document.getElementById("audio");
function sonido(){
    audio.play();
}
function recarga(){
    window.open("index.html","_top");
}
document.getElementById("inicio").addEventListener("click",voluntario);
document.getElementById("reinicio").addEventListener("click",recarga);
document.getElementById("inicio").addEventListener("click",sonido);


//document.querySelector("button").addEventListener("click",voluntario);

//const content = element.innerHTML;

//invocar el método removeChild(elemento). Dicha función eliminará el elemento.

