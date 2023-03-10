/* 2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'. */

let ciudades = [];

while(confirm('Presione "Aceptar" para agregar ciudades. "Cancelar" para finalizar')===true){
    ciudades.push(prompt('Ingrese el nombre de una ciudad.'));
}
document.write('<h1>Ciudades</h1>');
document.write('<ol>')
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`)
}
document.write(`</ol>`)
document.write(`<ul>`)
document.write(`<li>Cantidad de ciudades ingresadas: ${ciudades.length}</li>`);
document.write(`<li>Ciudad primera '${ciudades[0]}', ciudad tercera '${ciudades[2]}' y ciudad última '${ciudades[ciudades.length-1]}'.</li>`);
document.write('<li>')
document.write('Se agrega ciudad París a tu lista.');
ciudades.push('París');
document.write(`<ol>`)
for (let c = 0; c < ciudades.length; c++) {
    document.write(`<li>${ciudades[c]}</li>`)
}
document.write('</ol>')
document.write('</li>')
document.write(`<li>Ciudad que ocupa segundo lugar '${ciudades[1]}'.</li>`);
document.write(`<li>Se substituye la ciudad '${ciudades[1]}' por 'Barcelona'<br>`);
ciudades[1] = 'Barcelona'
document.write(`<ol>`)
for (let c = 0; c < ciudades.length; c++) {
    document.write(`<li>${ciudades[c]}</li>`)
}
document.write('</ol>');
document.write(`</li>`);
document.write(`</ul>`)