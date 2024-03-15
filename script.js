// para poder ver lo que escribo tnego que abrir la terminal y aplicar 
// console.log(parametro); es como un print.
//prompt es para pedir datos al usuario, no filtra el tipo de dato
//alert es para emitir un mensaje en el navegador 
// en un html se llama la ruta del script al final del body siempre
// `` permite mezclar string con javascript
var nombre, apellido;
nombre= prompt("ingrese su nombre");
apellido= prompt("ingrese su apellido");

console.log("nombre:", nombre);

console.log("apellido:",apellido);

// alert("Hola" + {nombre} + " " + {apellido} + ",bienvenido a Ada")

alert(`Hola ${nombre} ${apellido}, bienvenido a Ada`)
