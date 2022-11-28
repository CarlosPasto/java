
const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿Desea comprar usd,euro o reales?');
        cantidad = parseInt(prompt('cuantos queres comprar'));
        //console.log(cantidad) // Nan ->Not a Number
        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'usd':
                precio = 300;
                break;
            case 'euro':
                precio = 310;
                break;
            case 'reales':
                precio = 30;
                break;
            default:
                alert('ingrese correctamente el tipo de divisa');
                precio = 0;
                cantidadValidada = 0;

        }

        totalCompra += precio * cantidadValidada



        seguirComprando = confirm('¿queres agregar otro producto?')

    } while (seguirComprando);

    const totalConDescuento = aplicarDescuento(totalCompra);
    calcularEnvio(totalConDescuento);

};

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0) {
        if (cantidad <= 0) {
            alert('el importe minimo es 1.')
        } else {
            alert('debe agregar un importe.')
        }
        cantidad = parseInt(prompt('cuantos queres comprar'));
    }

    return cantidad;



};

const aplicarDescuento = (totalCompra) => {

    let totalConDescuento = 0;
    if (totalCompra >= 2000) {
        totalConDescuento = totalCompra * 0.80;
        return totalConDescuento;

    } else {
        return totalCompra;
    }



};

const calcularEnvio = (totalCompra) => {
    let tieneEnvioADomicilio = false;

    tieneEnvioADomicilio = confirm('¿Queres Envio A Domicilio?');
    if (tieneEnvioADomicilio && totalCompra >= 2000) {
        alert('Tenes envio gratis. El total de tu compra es $' + totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 700;
        alert('el envio cuesta $700. El total de tu compre es $' + totalCompra);
    }
};

alert('Gracias Por Elegirnos');

comprarProductos();



