
let primos = new Array;//declaracion del vector

for (let i = 0; i <1000; i++) {
    primos.push(true);
}
for (let i = 2; i< 1000; i++) {
    if (primos[i]) {
        for (let j = 2; i*j < 1000; j++) {
            primos[i*j]=false;
        }
    } 
}
for (let i = 2; i <1000; i++) {
    if (primos[i] == true) {
        console.log(`Los numeros primos son: ${i}`);
    }    
}