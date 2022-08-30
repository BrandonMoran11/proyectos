class Dado{
        constructor(){
            
        }
        lanzar(){
            
            return Math.floor(Math.random() * 6 + 1);
        }
}

class Corredor{
    constructor(){
        this.posicion = 0;
        this.dado = new Dado();
    }
    correr(){
        let valor = this.dado.lanzar();
        if (valor === 1) {
            this.posicion+=3;
        } else if(valor == 2 || valor == 3 || valor == 4){
            this.posicion+=2;
        }else if(valor == 6 || valor == 5){
            this.posicion+=1;
        }
        return this.posicion;

    }
    posicionCorredor(){
        return this.posicion;
    }
   
   
}
let corredor1 = new Corredor();
let corredor2 = new Corredor();
do {
    console.log(corredor1.correr()+ "----" + corredor2.correr());
 

} while (corredor1.posicionCorredor() <100 && corredor2.posicionCorredor() <100);
   
if (corredor1.posicionCorredor() >=100 && corredor2.posicionCorredor() >=100) {
    console.log("La carrera terminó en un empate");


}else if (corredor1.posicionCorredor() >= 100) {
    console.log("El corredor 1 es el ganador");

    
} else if (corredor2.posicionCorredor() >= 100) {
    console.log("El corredor 2 es el ganador");
}






