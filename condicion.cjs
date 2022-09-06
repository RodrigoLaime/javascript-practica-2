let typeSuscripción = ["Free", "Basic", "Expert", "ExpertPlus"];
let infoSuscripción = [
  "solo puedes tomar los cursos gratis",
  "puedes tomar casi todos los cursos de Platzi durante un mes",
  "puedes tomar casi todos los cursos de Platzi durante un año",
  "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];
let userSuscription = "Expert";
for (let i = 0; i < typeSuscripción.length; i++) {
  if (userSuscription == typeSuscripción[i]) {
    console.log(
      `Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`
    );
  }
}

let myArray = [
  "Manchester",
  "London",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "Carlisle",
];
function readArray(array) {
  console.log(array[0]);
}
console.log(readArray(myArray));

/* -------------------------- */
let mYArray = [
  "Manchester",
  "London",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "Carlisle",
];
function readArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} ${array[i]}`);
  }
}

console.log(readArray(mYArray));
