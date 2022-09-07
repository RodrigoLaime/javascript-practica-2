let nombre = "rodrigo";
let apellido = "Laime";
let ahorro = 20000;
let deuda = 2000;

let name = `mi nombre es ${nombre} ${apellido} y tengo ahorrado $${ahorro}`;
console.log(name);
/* --------------------------- */
const suscripcion = "free";

if (suscripcion == "free") {
  console.log("tomar curso gratis un mes");
} else if (suscripcion == "basic") {
  console.log("tomar todos los cursos por un mes");
} else if (suscripcion == "expert") {
  console.log("tomar todos los cursos 6 meses");
} else if (suscripcion == "expertduo") {
  console.log("tomar cursos durante 1 año");
}
/* ---------------------------- */
for (let i = 0; i < 5; i++) {
  console.log("el valor de i es" + i);
}

let j = 0;
while (j < 5) {
  console.log("el valor de j es: " + j);
  j++;
}

for (let k = 10; k >= 2; k--) {
  console.log("El valor de k es: " + k);
}

let l = 10;
while (l >= 2) {
  console.log("el valor de l es: " + l);
  l--;
}
/*condicion de preguntar asta que se cumpla la condicion */
let respuesta;
while (respuesta !== "4") {
  let pregunta = prompt("¿Cuanto es 2 + 2?");
  respuesta = pregunta;
}

/* practica aparte */
let alumnos = ["Rodrigo", "Axel", "Abril"];
for (let i = 0; i < alumnos.length; i++) {
  console.log(`hola ${alumnos[i]}`);
}
/* --------------------------------------- */

function ss(array){
  console.log(array[1])
}
ss(['rodri','rodrigo','roque']);

/*devolver 1 a 1 de un array */
let hermanas = ['celeste', 'antonella', 'evelyn'];
function presentarHermanas(){
  for(let i = 0; i < hermanas.length; i++)
  console.log(`mi hermana se llama ${hermanas[i]}`)
}
presentarHermanas();
/* devolver 1 a 1 de un objeto */

let primos = {
  mayor: "keving",
  medio: "william",
  menor: "santino"
}

function presentarPrimos(){
  const prim = Object.values(primos); //convierte objetos en array, devuelve el valor
  for(let i = 0; i < prim.length; i++)
  console.log(`Mi primo se llama ${prim[i]}`)
}
presentarPrimos();

function presentarPrimos2(){
  const prim2 = Object.keys(primos); //devuelve el nombre del valor y no el valor
  for(let i = 0; i < prim2.length; i++)
  console.log(`Mi primo ${prim2[i]}`)
}
presentarPrimos2();

function presentarPrimos3(){
  const prim3 = Object.entries(primos); //devuelve el nombre del valor y el valor 
  for(let i = 0; i < prim3.length; i++)
  console.log(`Mi primo ${prim3[i]}`)
}
presentarPrimos3();
/* cambiar las condiciones else if sin romper el codigo */
function marcaDeAuto(auto){
  if(auto == "camaro"){
    console.log('chevrolet')
    return; //return indica que termina la condicion
  }
  if(auto == "crossfox"){
    console.log('wolswagen')
    return;
  }
  if(auto == "citroen c5"){
    console.log('citroen')
    return;
  }
  console.warn('esta marca no se encuentra disponible');//warn indica advertencia
}
marcaDeAuto("citroen c4")

/* reto de replicar la funcion anterior con array y un solo condicional */

const autito = {
  camaro: 'chevrolet',
  crossfox: 'wolswagen',
  citroenC5: 'cirtoen'
}
function miAuto(auto){
  if (autito[auto]){
    console.log(autito[auto]);
    return;
  }
  console.warn('este auto no esta disponible');
}

miAuto('camaro');