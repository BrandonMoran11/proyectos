class Generador{
    generar(){
            return Math.floor(Math.random() * 15 + 1);
    }
}
let numeroAleatorio = new Generador();

let vector =new Array(10);

for (let i = 0; i < vector.length; i++) {
   vector[i] = numeroAleatorio.generar();
}
console.log(vector);

let auxiliar = vector[vector.length-1];
for (let i = vector.length-1; i >=1; i--) {
    vector[i] = vector[i-1];
}
vector[0] = auxiliar;

console.log(vector);
