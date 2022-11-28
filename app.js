let nombre = prompt("ingrese su nombre");
alert("Bienvenido" + " " + nombre + " " + "a las mejores casas de verano");

let casa = prompt ("¿Cuántas personas son?");

function seleccionarCasa (){
    switch (casa){
        case "2":
            alert(`Para dos personas contamos con la casa Terracota ${nombre}`)
            console.log(`son: ${casa} personas`)
            break;
        case "3":
            alert(`Para tres personas contamos con la casa Coral ${nombre}`)
            console.log(`son: ${casa} personas`)
            break;
        case "4":
            alert(`Para cuatro personas contamos con la casas Duplex ${nombre}`)
            console.log(`son: ${casa} personas`)
            break;
        default:
            alert(`Para esa cantidad de personas no contamos con espacio ${nombre}`)
            console.log("no tenemos espacio para esa cantidad de personas")
            break; }
}

seleccionarCasa();

let seña = alert ("Para continuar con la reserva debes señar la casa");
let pagar = Number(prompt("La seña son 1000 pesos, para continuar ingrese ese monto."));
let total = 1000

if (pagar >= total){
    alert("Felicitaciones tu reserva se realizó correctamente")
    console.log("reserva realizada");
} else{
    alert("No se pudo realizar la reserva")
    console.log("fondos insuficientes");
} 

