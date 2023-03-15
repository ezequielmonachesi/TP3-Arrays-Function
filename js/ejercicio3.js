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
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
let contador7 = 0;
let contador8 = 0;
let contador9 = 0;
let contador10 = 0;
let contador11 = 0;
let contador12 = 0;

document.write(`<h1>50 veces tirados los dados (Dado N°1 y Dado N°2)</h1>`);
document.write(`<ol>`);
for (let i = 0; i < 50; i++) {
  dado1 = Math.floor(Math.random() * (max - min + 1) + 1);
  dado2 = Math.floor(Math.random() * (max - min + 1) + 1);
  sumaDados = dado1 + dado2;
  apariciones.push(sumaDados);
  if(sumaDados === 2){
   contador2++
  }else if (sumaDados === 3){
    contador3++
  }else if (sumaDados === 4){
    contador4++
  }else if (sumaDados === 5){
    contador5++
  }else if (sumaDados === 6){
    contador6++
  }else if (sumaDados === 7){
    contador7++
  }else if (sumaDados === 8){
    contador8++
  }else if (sumaDados === 9){
    contador9++
  }else if (sumaDados === 10){
    contador10++
  }else if (sumaDados === 11){
    contador11++
  }else if (sumaDados === 12){
    contador12++
  }
  document.write(`<li>Dado N°1 ( ${dado1} ) + Dado N°2( ${dado2} ) = ${sumaDados} | </li>`);
}
document.write(`</ol>`);

document.write(contador2);