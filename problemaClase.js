// Mostrar todas las parejas de numeros amigos menores a 1000
// una pareja de numeros (num1,num2) se consideran amigos
// si se trata de numeros diferentes en donde ademas
// la suma de divisores del primer numero menores a el suman el segundo
// y la suma de divisores del segundo numero menores a el, suman el primero



function esNumeroAmigo(a,b){
    let sumaA=0;
    let sumaB=0;
     if (a == b) {
         return false;
     } else {
        for (let i = 1; i < a; i++) {
            if (a%i==0) {
                sumaA+=i;
            }
        }
        for (let j = 1; j < b; j++) {
            if (b%j==0) {
                sumaB+=j;             
            }
        }
    }
    if (sumaA == b && sumaB == a) {
        return true;
    }else{
        return false;
    }
}

 function numerosAmigos(max){
    let numerosAmigos=[];
     for (let i = 1; i < max; i++) {
         for (let j = 1; j <max; j++) {
             if (esNumeroAmigo(i,j)== true) { 
                numerosAmigos.push(i,j);
             }
            
         }
     }
     return numerosAmigos;
 }
 console.log(numerosAmigos(2000));
