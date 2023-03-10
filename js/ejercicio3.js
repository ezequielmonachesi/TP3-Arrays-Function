/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación. */

let dado1 = 0;
let dado2 = 0;
let max = 6;
let min = 1;
let apariciones = [];
let sumaDados = 0;

document.write(`<h1>50 veces tirados los dados (Dado N°1 y Dado N°2)</h1>`);
document.write(`<ol>`);
for (let i = 0; i < 50; i++) {
  dado1 = Math.floor(Math.random() * (max - min + 1) + 1);
  dado2 = Math.floor(Math.random() * (max - min + 1) + 1);
  sumaDados = dado1 + dado2;
  apariciones.push(sumaDados);
  document.write(`<li>Dado N°1 ( ${dado1} ) + Dado N°2( ${dado2} ) = ${sumaDados}</li>`);
}
document.write(`</ol>`);
