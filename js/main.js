let saludo = prompt ('Bienvenido a Australis Tejidos. Ingresa tu nombre para continuar o ESC para salir')
function calcularPrecio (){
    let ancho = parseInt (prompt ('Indique el ancho que desea en centímetros'))
    let largo = parseInt (prompt ('Indique el largo que desea en centímetros'))
    let color = prompt ('Indique el número que corresponde al tipo de lana que prefiere: 1- Lana natural 2- Lana teñida')
   let medida = ancho*largo
   switch (color){
    case '1':
        let lanaNatural = 8500
        alert ('El precio de su manta es $' + (medida*lanaNatural/10000));
        break;
    case '2':
        let lanaTeñida = 10700
        alert ('El precio de su manta es $' + (medida*lanaTeñida/10000))
        break;
        default:
            alert ('Recargue la página y vuelva a empezar');
            break;
   }
}
while (saludo != 'ESC'){
calcularPrecio ()
saludo = prompt ('Bienvenido a Australis Tejidos. Ingresa tu nombre para continuar o ESC para salir')
}


