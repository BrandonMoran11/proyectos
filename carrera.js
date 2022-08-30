class Accion{
    
    movimiento(){
        
        return Math.floor(Math.random() * 100 + 1);
    }
}

class Liebre{
    constructor(){
        this.posicion = 0;
        this.accion = new Accion();
    }
    avanza(){
        let probabilidad = this.accion.movimiento();
        if (probabilidad <=20) {
            this.posicion+=9;
       } else if(probabilidad <=35){
           this.posicion-=1;
       }else if(probabilidad <=15){
           this.posicion-=2;
       }else if(probabilidad <=10){
        this.posicion-=12;
        }
       return this.posicion;

    }
    obtenerPosicion(){
        return this.posicion;
    }

}
class Tortuga{
    constructor(){
        this.posicion = 0;
        this.accion = new Accion();
    }
    avanza(){
        let probabilidad = this.accion.movimiento();
        if (probabilidad <= 50) {
             this.posicion+=3;
        } else if(probabilidad <=20){
            this.posicion-=6;
        }else if(probabilidad <= 30){
            this.posicion+=1;
        }
        return this.posicion;
    }
    obtenerPosicion(){
        return this.posicion;
    }
}

let liebre = new Liebre();
let tortuga = new Tortuga();

do {
    console.log(tortuga.avanza()+ "----" + liebre.avanza());
 

} while (tortuga.obtenerPosicion() <100 && liebre.obtenerPosicion() <100);
   
if (tortuga.obtenerPosicion() >=100 && liebre.obtenerPosicion() >=100) {
    console.log("La carrera terminó en un empate");


}else if (tortuga.obtenerPosicion() >= 100) {
    console.log("La tortuga es el ganador ");

    
} else if (liebre.obtenerPosicion() >= 100) {
    console.log("La liebre es el ganador");
}