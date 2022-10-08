class Producto{
    constructor(codigo,nombre,cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad =cantidad;
        this.costo = costo;
    }
    informacion(){
        return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Costo: ${this.costo} `;
    }
}
class Inventario{
    constructor(){
        this.productos = new Array();
    }
    agregar(producto){
        let i = this.productos.length;

        if (i == 0) {
            this.productos[i] = producto;
            return true;
        }

        if (this.productos.length > 0) {
            while (producto.codigo < this.productos[i - 1].codigo) {
                this.productos[i] = this.productos[i - 1];
                i--;
            }
            this.productos[i] = producto;

            return true;
        }

        return false;

    }
    eliminar(codigo){
            for (let i = 0; i < this.productos.length; i++) {
                if (this.productos[i].codigo == codigo) {
                    for (let j = i; j < this.productos.length; j++) {
                        this.productos[j] = this.productos[j + 1];                 
                   }
                   this.productos.pop();
                   return true;
               
                }
            }
     }
    buscar(codigo){
        let l=0;
        let r = this.productos.length-1;
        let mitad = Math.floor((l+r)/2);

        if (codigo === this.productos[mitad].codigo) {
            return this.productos[mitad];
        }

        while (codigo !== this.productos[mitad].codigo) {
            if (l > r) {
                return null;
            }
            else if (codigo < this.productos[mitad].codigo) {
                r = mitad - 1;
            }
            else {
                l = mitad + 1;
            }

            mitad = Math.floor((l + r) / 2);
        }

        if (codigo === this.productos[mitad].codigo) {
            return this.productos[mitad];
        }
       
      
    }
    listado(){
        let listado = "";
        for (let i = 0; i < this.productos.length; i++) {
                listado += `El producto numero ${i+1} es: ${this.productos[i].informacion()}`;
        }
        return listado;
    }
    listadoInverso(){
        let listadoInverso= "";
        for (let i = this.productos.length-1; i >=0; i--) {
           listadoInverso += `El producto numero ${i+1} es: ${this.productos[i].informacion()}`;
    }
        return listadoInverso;
    }
}
//  let p1 = new Producto(123,"Coca cola",10,20);
//  let p2 = new Producto(1234,"Mantecadas",1,24);
//  let p3 = new Producto(12345,"Agua de 1L",40,17);
//  let p4 = new Producto(123456,"Galletas",10,22);
//  let p5 = new Producto(1234567,"Sabritas",30,21);

//  let inventario = new Inventario();

// inventario.agregar(p1);
// inventario.agregar(p2);
// inventario.agregar(p3);
// inventario.agregar(p4);
// inventario.agregar(p5);
// p5 = new Producto(12345678,"pps",30,21);
// inventario.agregar(p5);

// console.log(inventario.listado());

//console.log(inventario.eliminar(123));
// // inventario.listado();
// //  console.log(inventario.listadoInverso());
// //  console.log(inventario.buscar(123));


