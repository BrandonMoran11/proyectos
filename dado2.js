class Dado{
    constructor(){
        
    }
    lanzar(){
        
        return Math.floor(Math.random() * 6 + 1);
    }
}
let dado1 = new Dado();
let  sumas = [0,0,0,0,0,0,0,0,0,0,0];


// for (let i = 0; i <=100; i++) {
//    num = dado1.lanzar();
//    caras[num-1]++;
// }

    for (let i = 0; i <=100; i++) {
        valor = dado1.lanzar()+dado1.lanzar();
        sumas[valor-2]++;  
    }
    for (let i = 0; i <11; i++) {
        console.log(`La suma ${i+2} se repitio ${sumas[i]} veces`);
        
        
    }
   

