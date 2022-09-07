##

¿que es un ?
la forma de ejecutar javascript es tener un entorno de ejecucionde javascript. Un entorno de ejecucion puede ser un navegador web, nodejs,
-nodejs: es el entorno de ejecucion en el backend

.querySelector('selector') //permite seleccionar un elemento de html por su selector,id,class,input
.querySelectorAll('selector') // permite lo mismo pero devuelve todos los selectores y no solo uno

## quirtar o agregar elementos, valores

h1.innerHTML = ''//de nuestros elementos permite modificar el html dentro de la etiqueta que estemos selccionando
h1.innerText = 'texto'//permite modificar o agregar texto

h1.getAttribute //permite leer algunos de los atributos de los elementos
h1.setAttribute //perite modificar los atributos.cambia los valores

h1.classList.add('')// agrega un valor a atributo
h1.classList.remove('')//elimina un valor del atributo
h1.classList.tooglr('')//agreguemos o quitemos dependiento si lla tiene la classe o no
h1.calssList.contains('')//devuelve true o flase si existe la classe

input.value = ''//se puede agregar directamente los valores desde javascript

## crear elementos

document.createElement('img') //se crea una etiqueta de img

MANIULACION DEL DOM
editar, crear o agregar elementos en HTML desde JavasCript

## Dom 2

onchange =''//es un atributo que recive el nombre de la funcion para ejecutar la funcion. este se aplica a los input. Permite escuchar la interaccion de los usuarios con el input
onclick = '' //recive el nombre de la funcion, este se aplica a los buttom, escucha la interaccion de los usuarios al hacer click en el buttom

.addEventListener() {}//escucha cada ves que sucesa un evento y ejecuta el codigo javascript. primero el selector, luego que evento quieres escuchar y luego la funcion a llamar sin parentesis
