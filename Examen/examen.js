// 1.- Crear un ciclo que llene con aleatorios entre 31 y 70 un vector de 10

       
  let vector = [];
  for (let i = 0; i <10; i++) {
    vector.push(Math.floor(Math.random() * (70 - 31)+31));
  }

// 2.- Crear una funcion que reciba un vector y devuelva cuantos numeros impares hay
function esImpar(){
let vector2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20];
    let suma = 0;
    for (let i = 0; i <vector2.length; i++) {
            if ((vector2[i]%2)==1) {
                suma++;
            }        
    }
    return suma;
}

// 3.- Crear una funcion que reciba un vector con datos, calcule el promedio y diga cuantos numeros son iguales al promedio
function calcularPromedio(){
    let vector3=[9,9,10,9];
    let suma2 = 0;
    let promedio =0;
    let repetido = 0;
    for (let i = 0; i < vector3.length; i++) {
            suma2 += vector3[i];      
    }
    promedio = suma2/vector3.length;
   for (let i = 0; i < vector3.length; i++) {
        if (parseInt(promedio) == vector3[i]) {
            repetido++;
        }    
   }
    return repetido;
    
}

// 4.- Crear una funcion que reciba dos vectores que pueden tener tamaños diferentes y muestre en pantalla  cuales valores hay en común, lo que les sea mas facil.

function valoresComun(){
    let vector4 = [1,2,3,4,5,6,7,8,9];
    let vector5 = [2,3,4,6,8];
    let vectorComunes = [];

    for (let i = 0; i < vector5.length; i++) {

        for (let j = 0; j < vector4.length; j++) {
            if (vector4[i]== vector5[j]) {
                vectorComunes.push(vector4[i]);
            }
        }
    }
    return vectorComunes;
}
