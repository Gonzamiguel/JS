
function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
    return "par";
    } else {
    return "impar";
    }
}

while (true) {
    const entrada = prompt("Ingrese un número (o escriba 'salir' para finalizar):");

    if (entrada.toLowerCase() === "salir") {
    break; 
    }

    const numero = parseFloat(entrada); 

    if (!isNaN(numero)) {
    const resultado = determinarParOImpar(numero);
    alert(`El número ${numero} es ${resultado}.`);
    } else {
    alert("Entrada no válida. Intente nuevamente.");
    }
}
