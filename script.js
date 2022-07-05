
let cantidad1 = parseInt(prompt("Cuantos productos desea?"))

let productos

let cantidad2

let precio = 0

let total = 0

for (i = 0; i < cantidad1; i++) {

    productos = parseInt(prompt("Que producto/s desea? (Escriba el numero correspondiente: 1. Cuarzo Rosa, 2. Amatista, 3. Cuarzo Cristal, 4. Vela Rose, 5. Vela Drama"))
    cantidad2 = parseInt(prompt("Elija la cantidad"))

    if (productos === 1 || productos === 2 || productos === 3) {

        precio = 650 * cantidad2

    } else if (productos === 4 || productos === 5) {

        precio = 580 * cantidad2

    }

    total += precio
    alert("Total: $" + total)



}
