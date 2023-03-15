/* 1- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función */
let numero;

do {
   numero = parseInt(prompt('Ingrese un número entero'))
} while (isNaN(numero));

function parImpar(x){
    if (x%2 === 0) {
        return(document.write(`${x} es par <br>`));
    }else{
        return(document.write(`${x} es impar <br>`));
    }
}
parImpar(numero);