

let stock = [];

function addProduct(name, quantity) {
    const product = {
        name: name,
        quantity: quantity,
};
    stock.push(product);
    alert(`Producto ${name} agregado al stock con una cantidad inicial de ${quantity}.`);
}

function updateStock(productName, quantity) {
    const product = stock.find(item => item.name === productName);
        if (product) {
            product.quantity += quantity;
            alert(`Stock de ${productName} actualizado. Cantidad actual: ${product.quantity}`);
} else {
    alert(`No se encontró el producto ${productName} en el stock.`);
}
}

function sellProduct(productName, quantity) {
    const product = stock.find(item => item.name === productName);
    if (product && product.quantity >= quantity) {
        product.quantity -= quantity;
        alert(`Venta de ${quantity} unidades de ${productName} realizada. Stock actual: ${product.quantity}`);
} else if (product) {
    alert(`No hay suficiente stock de ${productName}. Stock actual: ${product.quantity}`);
} else {
    alert(`No se encontró el producto ${productName} en el stock.`);
}
}

function displayStock() {
    console.log("Stock actual:");
    stock.forEach(product => {
    console.log(`${product.name}: ${product.quantity}`);
});
}


while (true) {
    const action = prompt("Ingrese una acción (add/update/sell/display/exit):");

    if (action === "exit") {
    break;
}

switch (action) {
    case "add":
        const productNameAdd = prompt("Ingrese el nombre del producto:");
        const quantityAdd = parseInt(prompt("Ingrese la cantidad inicial del producto:"));
        addProduct(productNameAdd, quantityAdd);
        break;

    case "update":
        const productNameUpdate = prompt("Ingrese el nombre del producto a actualizar:");
        const quantityUpdate = parseInt(prompt("Ingrese la cantidad a agregar al stock:"));
        updateStock(productNameUpdate, quantityUpdate);
        break;

    case "sell":
        const productNameSell = prompt("Ingrese el nombre del producto a vender:");
        const quantitySell = parseInt(prompt("Ingrese la cantidad a vender:"));
        sellProduct(productNameSell, quantitySell);
        break;

    case "display":
        displayStock();
        break;

    default:
        alert("Comando no válido. Intente nuevamente.");
}
}