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

let auxiliar;
for (let i = 0; i <=(vector.length-1)/2; i++) {
    auxiliar = vector[i];
    vector[i]= vector[(vector.length-1)-i];
    vector[(vector.length-1)-i] = auxiliar;
   


}
console.log(vector);
