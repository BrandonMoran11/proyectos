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
        return this.productos.push(producto);
    }
    eliminar(codigo){
        let producto = this.buscar(codigo);

        if (producto != null) {
            for (let i = 0; i < this.productos.length; i++) {
                if (this.productos[i].codigo == codigo) {
                    for (let j = i; j < this.productos.length; j++) {
                        this.productos[j] = this.productos[j + 1];
                    }
                }
            }

            this.productos.pop();
            return true;
        }
     }
    buscar(codigo){
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo == codigo) {
                return this.productos[i];
            }
        }

        console.log("No existe el producto");
        return null;

    }
    listado(){
        let listado = "";
        for (let i = 0; i < this.productos.length; i++) {
                listado = `El producto numero ${i+1} es: ${this.productos[i].informacion()}`;
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


