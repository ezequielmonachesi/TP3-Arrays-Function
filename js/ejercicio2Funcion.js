/* 2- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.
 */

function textoMayusMinus(texto){
    if(texto === texto.toUpperCase()){
        document.write('Texto ingresado está en Mayuscula')
    }else if (texto === texto.toLowerCase()) {
        document.write('Texto ingresado está en Minuscula')
    } else {
        document.write('Texto ingresado combinacion de mayusculas y Minuscula')
    }
}

let texto = prompt('Ingrese el texto por favor');
textoMayusMinus(texto);