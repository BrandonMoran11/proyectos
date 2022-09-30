/*Calcular las horas (minutos y segundos) trabajados por una persona.
Se van a ingresar las horas, minutos y segundos de entrada y de salida.
Se mostrara cuanto trabajo, considerando que se ponen en formato de 24 horas y que una persona entra
y sale el mismo dia.

hackerrank.com
*/




function hms2segsInicio(h,m,s){
   let segundosIniciales = (h*3600)+(m*60) +s;
   return segundosIniciales;
 }
 function hms2segsFinal(h,m,s){
    let segundosFinales =(h*3600)+(m*60) +s;
    return segundosFinales;
 }
let entradaTrabajador = hms2segsInicio(9,30,20);
let salidaTrabajador = hms2segsFinal(21,30,20);
let tiempo = 0;
if (entradaTrabajador>salidaTrabajador) {
    tiempo =
}

