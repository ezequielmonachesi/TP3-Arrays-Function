/* 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b) */

let lado1 = parseInt(prompt('Ingrese un lado del rectangulo'))
let lado2 = parseInt(prompt('Ingrese el segundo lado del rectangulo'))

let perimetro = (lado1,lado2) => 2*(lado1 + lado2);

document.write(`El perimetro del rectangulo con lados: ${lado1} y ${lado2} es igual a ${perimetro(lado1,lado2)}`);