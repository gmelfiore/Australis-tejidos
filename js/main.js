let carrito = [];

class Producto{
    constructor (nombre, precio){
        this.nombre= nombre;
        this.precio= parseInt(precio);
    }
}

naturalPrecio = 8500
fantasiaPrecio = 10700
document.querySelector ("#btn-calcular").addEventListener ("click", () => {
    let ancho = parseInt(document.getElementById ("formGroupExampleInput").value);
    let largo = parseInt(document.getElementById ("formGroupExampleInput2").value);
    let lana = document.getElementById ("lana").value;
    let medida = ancho * largo;
    let r;

    if (lana == '1'){
    r = medida*naturalPrecio/10000;
    } else if (lana == '2'){
        r = medida*fantasiaPrecio/10000
    }
    
    Swal.fire ({
        title: ('Tu mantita ideal cuesta $' + (r)),
        text: '¿Querés agregarla al carrito?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Comprar',
        denyButtonText: 'Seguir mirando'
        }).then((respuesta) => {
        if (respuesta.isConfirmed) {
            carrito.push(new Producto ("Mi mantita ideal", (r)))
            console.log (carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
        // console.log (JSON.parse(localStorage.getItem (carrito)))
      })
    })

    let mostrarCarrito = JSON.parse (localStorage.getItem (carrito));
  
    //INTENTOS DE MOSTRAR CARRITO EN EL HTML

    //INTENTO 1

    // const productosAgregados = document.getElementById ("productosAgregados");

    // function mostrarCarrito {
    // if (carrito.length != 0 ){
    // carrito.forEach ((product) =>{
    //     let content = document.createElement ("div");
    //     content.className = "card";
    //     content.innerHTML = `
    //     <h2>${carrito.nombre}</h2>
    //     <p>$ ${carrito.precio}</p>
    //     `;
    //     productosAgregados.append(content);
    // });
    // }}

    // mostrarCarrito ()
    
    //INTENTO 2

    // for (const producto of carrito) {
    //     let compra = document.getElementById("productosAgregados");
    //     compra.innerHTML = `<h2>${producto.nombre}</h2><p>Precio: $${producto.precio}</p>`;
    // }

