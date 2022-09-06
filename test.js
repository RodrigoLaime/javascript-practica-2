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
