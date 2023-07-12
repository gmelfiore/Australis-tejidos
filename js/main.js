// let saludo = prompt ('Bienvenido a Australis Tejidos. Ingresa tu nombre para continuar o ESC para salir')
// function calcularPrecio (){
//     let ancho = parseInt (prompt ('Indique el ancho que desea en centímetros'))
//     let largo = parseInt (prompt ('Indique el largo que desea en centímetros'))
//     let color = prompt ('Indique el número que corresponde al tipo de lana que prefiere: 1- Lana natural 2- Lana teñida')
//    let medida = ancho*largo
//    switch (color){
//     case '1':
//         let lanaNatural = 8500
//         alert ('El precio de su manta es $' + (medida*lanaNatural/10000));
//         break;
//     case '2':
//         let lanaTeñida = 10700
//         alert ('El precio de su manta es $' + (medida*lanaTeñida/10000))
//         break;
//         default:
//            alert('Opción no valida. Intente de nuevo');
    //         calcularPrecio()
    //         break;
//    }
// }
// while (saludo != 'ESC'){
// calcularPrecio ()
// saludo = prompt ('Bienvenido a Australis Tejidos. Ingresa tu nombre para continuar o ESC para salir')
// }

function Stock (nombre, cantidad) {
    this.nombre = nombre
    this.cantidad = cantidad
  }
  
  const productos = []
  
  const cargarProducto = () => {
    const nuevoProducto = new Stock(
      prompt('Ingrese el nombre del producto'),
      prompt('Ingrese el stock del producto')
    )
    productos.push(nuevoProducto)
  }
  
  for (let i = 0; i < 5; i++) {
    cargarProducto()
  }
  
  
  function iterar  () {
    let opciones = prompt ('¿Qué desea hacer con los productos ingresados? Ingrese el número correspondiente: 1- Visualizar los productos que tienen un stock de 5 o menos.  2-  Ordenarlos de menor stock a mayor stock. 3- Ordenarlos alfabéticamente.')
    switch (opciones){
      case '1': 
      const pocoStock= productos.filter ( producto => producto.cantidad <= 5)
      console.log (pocoStock);
      break;
  
      case '2': 
      const masOmenos= productos.sort (function (a, b) {
        if(a.cantidad < b.cantidad) { return -1; }
        if(a.cantidad > b.cantidad) { return 1; }
        return 0;
        })
      console.log (masOmenos);
      break;
  
      case '3':
      const abc = productos.sort (function (a, b) {
      if(a.nombre < b.nombre) { return -1; }
      if(a.nombre > b.nombre) { return 1; }
      return 0;
      })
      console.log (abc)
      break;
  
  
      default: 
      console.log (productos);
      break;
    }
  }
  
  let resultado= iterar ()
  
  console.log(resultado)
  
