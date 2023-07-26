let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedor = document.getElementById("productosAgregados");

console.log(contenedor);

function mostrarCarrito () {
    // if (carrito.length != 0 ){
    carrito.forEach ((product) =>{
        let content = document.createElement ("div");
        content.className = "card";
        content.innerHTML = `
        <h2>${product.nombre}</h2>
        <p>$ ${product.precio}</p>
        `;
        contenedor.append(content);
    });
    }

    mostrarCarrito ()