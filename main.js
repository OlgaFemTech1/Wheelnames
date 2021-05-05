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
      elegida.innerHTML = "Carga la página de nuevo";
   }
   // document.body.innerHTML = (randomItem);

}
const cucanya =document.getElementById("cucanya");
cucanya.animate([
    { transform: 'scale(1)',opacity: 1, offset: 0},
    { transform: 'scale(.5) rotate (2700deg)', opacity: 0.5, offset: .5},
    { transform: 'scale(1) rotate (0deg)', opacity: 1, offset:1},
    ], {
    duration: 1000,
    delay: 20,
    easing: 'linear',
    iterations: Infinity,
    direction: 'normal'

    });


function recarga(){
    window.open("index.html","_top");
}
document.getElementById("inicio").addEventListener("click",voluntario);
document.getElementById("reinicio").addEventListener("click",recarga);

//document.querySelector("button").addEventListener("click",voluntario);

//const content = element.innerHTML;


//invocar el método removeChild(elemento). Dicha función eliminará el elemento.


