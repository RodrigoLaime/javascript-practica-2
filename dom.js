const h1 = document.querySelector("h1"); //hace falta poner # y .
const p = document.querySelector("p");
const parrafito = document.getElementById("parrafito"); //no hace falta poner #
const pid = document.getElementById("pid"); //no hace falta poner .
const input = document.querySelector("input");

console.log(input.value);
console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
/* console.log(h1.getAttribute("class")); //lee los atributos
console.log(h1.setAttribute("class", "rojo")); //modifica los atributos */
h1.classList.add("rojo"); //agrega valores a los atributos
h1.classList.remove("verde"); //elimina valor especifico a los atributos

input.value = 456;

const img = document.createElement("img"); //crear una img
img.setAttribute(
  //a la img le pusimos los atributos
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/283px-Pac-Man_Cutscene.svg.png"
);
pid.innerHTML = ""; //borramos el contenido del HTML
pid.appendChild(img); //insertamos dentro de un contenedor o elemento que ya existe
