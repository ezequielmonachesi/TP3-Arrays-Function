/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación. */

let dado1 = 0
let dado2 = 0
let lanzamientos =[]
let posiblesSumas=[2,3,4,5,6,7,8,9,10,11,12]
let repeticiones=[]

for(let i = 0;i<50;i++){
    dado1 = Math.floor(Math.random() * 6) + 1
    dado2 = Math.floor(Math.random() * 6) + 1
    lanzamientos[i]= + dado1 + dado2    
}
posiblesSumas.forEach(posibleSuma => {
    let contador = 0
    lanzamientos.forEach(lanzamiento => {
        if(lanzamiento === posibleSuma){        
        contador ++             
        }        
    });
    repeticiones.push(`El resultado ${posibleSuma} se repitio ${contador} veces <br>`)
});

document.write('lanzamientos de dados: '+lanzamientos.join(' - '))

document.write('<br>'+repeticiones)