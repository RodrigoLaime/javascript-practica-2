const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#calcular");
const result = document.querySelector("#resultado");

/* function btnOnclick() {
  const resultado = input1.value + input2.value; //concatena
  result.innerText = `Resultado ${resultado}`;
} */
/* function btnOnclick() {
  const resultado = parseInt(input1.value) + parseInt(input2.value); //suma y no concatena con parseInt
  result.innerText = `Resultado ${resultado}`;
} */

form.addEventListener("submit", sumarInputValues);
function sumarInputValues(event) {
  /* console.log({ event }); */
  event.preventDefault();
  const sumaInput = input1.value + input2.value;
  result.innerText = `Resultado ${sumaInput}`;
}
