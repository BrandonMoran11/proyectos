class Dado{
    constructor(){
        
    }
    lanzar(){
        
        return Math.floor(Math.random() * 6 + 1);
    }
}

class Jugador{
    constructor(){
        this.posicion = 0;
    }
    avanza(cara){
        this.posicion += cara;
    }
    lanzarDados(){

    }
    verficar(){
        
    }
}

class Tablero{
    constructor(){
        this.casillas=new Array(100);
        this.serpientesInicio=[16,46,49,62,64,74,89,92,95,99];
        this.serpientesCola=[6,25,11,19,60,54,68,88,75,80];
        this.escalerasInicio=[2,7,8,15,21,28,36,51,71,78,87];
        this.escalerasFinal=[23,14,30,26,42,84,44,67,91,98,94];

    }
    getSerpientesInicio(){
        return this.serpientesInicio;
    }
    getSerpientesCola(){
        return this.serpientesCola;
    }
    getEscalerasInicio(){
        return this.escalerasInicio;
    }
    getEscalerasFinal(){
        return this.EscalerasFinal;
    }
    getCasillas(){
        return this.casillas;
    }
}
let dado = new Dado();
let jugador1 = new Jugador();
jugador1.avanza(dado.lanzar());
let tablero = new Tablero();
