let carrito = [];

class Producto{
    constructor (nombre, precio, img, id){
        this.nombre= nombre;
        this.precio= parseInt(precio);
        this.img= img;
        this.id= id;
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
            carrito.push(new Producto ("Mi mantita ideal", (r), "../Imagenes/manta-blanca.jpg", "mantita"))
            console.log (carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        };
        Toastify ({
            text: "¡Producto agregado al carrito!",
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            className: 'toast-agregado',
            style: {
                background: "rgba(93, 220, 234, 0.838)",
              },
        }).showToast();
      })
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    })

  let accesorios = [
    {
    id: 'quieroCaramelo',
    nombre:'Almohadón Caramelo',
    precio: 5000,
    img: "../Imagenes/almohadon-caramelo.jpg",
  },
    {
        id: 'quieroAlmohadonRedondo',
        nombre: 'Almohadón Redondo',
        precio: 3500,
        img: "../Imagenes/almohadon-redondo.jpg",
    },
    {
        id:'quieroAlfombra',
        nombre: 'Alfombra redonda',
        precio: 10000,
        img: "../Imagenes/alfombra.jpeg",
    },
    {
        id: 'quieroCuellito',
        nombre: 'Cuellito',
        precio: 3500,
        img: "../Imagenes/cuellito.jpg",
    },
    {
        id:'quieroGuantes',
        nombre: 'Guantes manopla',
        precio: 2500,
        img: "../Imagenes/guantes.jpg",

    },
    {
        id: 'quieroPantuflas',
        nombre: 'Pantuflas',
        precio: 3500,
        img: "../Imagenes/pantuflas.jpg",
    },];

    function comprarAccesorios (){
        let botones = document.querySelectorAll (".btnAccesorios")
        for (const boton of botones){
            boton.onclick = (e) =>{
                const accesorioSeleccionado = accesorios.find(accesorio => accesorio.id == e.target.id)
                carrito.push(accesorioSeleccionado);
                console.log (carrito)
                localStorage.setItem("carrito", JSON.stringify(carrito))
                Toastify ({
                    text: "¡Producto agregado al carrito!",
                    duration: 3000,
                    gravity: 'bottom',
                    position: 'right',
                    className: 'toast-agregado',
                    style: {
                        background: "rgba(93, 220, 234, 0.838)",
                      },
                }).showToast();
            }

        }
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    }

    comprarAccesorios ()

    
   
  
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

