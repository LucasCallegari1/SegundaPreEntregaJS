
// Creo el molde para los productos que voy a usar.

class Producto {
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Creo un Array.

const carrito = [];

// Productos 

const espejo = new Producto("Espejo", 15000, 'espejo.png');
const cuadro = new Producto("Cuadro", 20000, 'cuadro.png');
const perchero = new Producto("Perchero", 10000, 'perchero.png');
const mesa = new Producto("Mesa", 15000, 'mesa.png');

// Cupón

let valor = 50000;

// Funciones 

function agregarAlCarrito(producto){
    if (valor - producto.precio < 0){
        alert("No tienes suficiente plata para seguir canjeando tu cupón");
    } else {
        carrito.push(producto);
        valor = valor - producto.precio;
        actualizarHTML();
    }
}

function quitarDelCarrito(indice) {
    const producto = carrito[indice];
    valor = valor + producto.precio;
    carrito.splice(indice, 1);
    actualizarHTML();
}

function actualizarHTML(){
    nodoCarrito.innerHTML = "";
    for (const producto of carrito){
        let indiceProducto = carrito.indexOf(producto);
        let nodoProducto =`
        <div class="producto" onclick="quitarDelCarrito(${indiceProducto})" >
            <img src="img/${producto.imagen}"> 
        </div>`;
        nodoCarrito.innerHTML += nodoProducto;
    }
    nodoValor.innerText = valor;
}

// Nodos 

const nodoValor = document.querySelector("#valor");
nodoValor.innerText = valor;
const nodoCarrito = document.querySelector("#carrito");
