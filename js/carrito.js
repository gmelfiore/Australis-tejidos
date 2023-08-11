let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedor = document.getElementById("productosAgregados");

console.log(contenedor);

function mostrarCarrito () {
    contenedor.innerHTML=''
    if (carrito.length != 0 ){
    carrito.forEach ((product) =>{
        let content = document.createElement ("div");
        content.className = "card";
        content.innerHTML = `
    <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="../Imagenes/manta-natural.jpg" class="img-fluid rounded-start" alt="manta-blanca">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${product.nombre}</h5>
                    <p class="card-text">$ ${product.precio}</p>
                    <div class="d-grid gap-2 d-md-block">
                        <button id="${product.id}"class="btn" type="button">❌</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     `;
        contenedor.append(content);
        const btnEliminar = document.getElementById (`${product.id}`)

        btnEliminar.style.backgroundColor =  'rgb(148,112,149)';
        btnEliminar.addEventListener ("click", (e)=>{
            eliminarProducto (e.target.id)
                })
        })
        
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
        totalBuying.className = "total-content";
        totalBuying.innerHTML = `Total a pagar: ${total} $`;
        contenedor.append(totalBuying);
    
    let finalizarCompra = document.createElement ("div");
        finalizarCompra.innerHTML = `
        <button type="button" class="btn btn-primary btn-lg" id="btn-finalizar">Finalizar compra</button>
        `;
        contenedor.append(finalizarCompra);
    } else {
        let vacio = document.createElement ('div');
        vacio.innerHTML = `
        <h1>Tu carrito está vacío</h1>`;
        contenedor.append(vacio);
        }

        
    }

    
    mostrarCarrito ()

    function eliminarProducto (producto){
        const eliminar= carrito.find (carrito => carrito.id === producto)
        const posicion =carrito.indexOf(eliminar)
        carrito.splice (posicion, 1)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito ()
    }

    let btnFinalizar = document.querySelector ("#btn-finalizar")
    btnFinalizar.addEventListener("click", () =>{
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito ()
        })
   
        
    
    

    
   
            
    // function detallesCarrito (){
    // if (carrito.length != 0 ){
    //     let finalizarCompra = document.createElement ("div");
    //     finalizarCompra.innerHTML = `
    //     <button type="button" class="btn btn-primary btn-lg">Finalizar compra</button>
    //     `;
    // } else {
    //         let vacio = document.createElement ('div');
    //         vacio.innerHTML = `
    //         <h2> Tu carrito está vacío </h2>`;
    //         }
    // }

    // detallesCarrito ()
    

   