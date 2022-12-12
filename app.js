import { Producto } from './producto.js';

// Bienvenida al usuario
let nombre = prompt("ingrese su nombre");
function bienvenida() {
    alert("Bienvenido" + " " + nombre + " " + "a Rodeate de energía");
    console.log(`el nombre del usuario es: ${nombre}`);
}
bienvenida();

// Array

const especies = [
    {
        "nombre": "Graptoveria Bashful",
        "precio": 200,
        "disponible": true

    },
    {
        "nombre": "Crassula nudicaulis herrei",
        "precio": 100,
        "disponible": true
    },
    {
        "nombre": "Haworthia marumiana",
        "precio": 250,
        "disponible": true
    },
    {
        "nombre": "Anacampseros telephiastrum",
        "precio": 300,
        "disponible": true
    }
];
console.info(especies);

//funciones 

let montoAPagar = prompt("¿Cuánto es el monto que esta usted dispuesto a pagar?")
let especiesFiltro = especies.filter ((especie)=>{
    return especie.precio <= montoAPagar;

})
console.log("especies Filtro:",especiesFiltro)


let suculenta = prompt("¿Qué suculenta le interesa?");
let existe = true;
let productos = [];

function agregarProducto() {
    especiesFiltro.forEach((especie)=>{
        if(suculenta === especie.nombre){
            productos.push(new Producto(especie.nombre, especie.precio, especie.disponible))
        }
    })
    if(productos.length > 0 )
        console.log(`Producto seleccionado: ${productos[0].nombre}`);
    else{
        console.log(`El monto no alcanza para esa especie`);
        alert(`El monto no alcanza para esa especie ${nombre}`)
    }
}

function seleccionarSuculenta() {
    switch (suculenta) {
        case "Graptoveria Bashful":
            agregarProducto();
            break;
        case "Crassula nudicaulis herrei":
            agregarProducto();
            break;
        case "Haworthia marumiana":
            agregarProducto();
            break;
        case "Anacampseros telephiastrum":
            agregarProducto();
            break;
        default:
            alert(`No contamos con esa suculenta ${nombre}`)
            console.log("No tenemos esa especie")
            existe = false;
            break;
    }
}

seleccionarSuculenta();

if (existe) {
    console.log(productos)
    let pagar = Number(prompt(`El valor de la especie ${productos[0].nombre} es de ${productos[0].precio} pesos, para continuar ingrese el monto con que va a pagar.`));
    if (pagar >= productos[0].precio) {
        alert("Felicitaciones tu compra se realizó correctamente")
        console.log("compra realizada");
    } else {
        alert("No se pudo realizar la compra")
        console.log("fondos insuficientes");
    }
}



