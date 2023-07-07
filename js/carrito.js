
class ArrayObjeto {
    constructor(obj) {
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.precio = obj.precio;
        this.imagen = obj.imag;
        this.cantidad = obj.cantidad
    }
}

let almacenadosls = cargarProductosLS()

let carritoLS = [];

let contenedorC = document.getElementById('carro_compras')

for (const objeto of almacenadosls) {
    carritoLS.push(new ArrayObjeto(objeto));
}

mostrarCarrito = () => {

    let vaciarCarro = document.createElement('div')
    vaciarCarro.className = ''

    vaciarCarro.innerHTML = `<button id="Vaciar">Vaciar Carrito  ❌</button>`
    vaciarCarro.id = 'Vaciar'

    contenedorC.append(vaciarCarro)
    vaciarCarro.addEventListener('click',vaciarCarrito)

    carritoLS.forEach((x) => {

        let card = document.createElement('tr')
        card.innerHTML =
            `
        <td><img src="${x.imagen}" alt="" width="100"></td>
        <td >${x.nombre}</td>
        <td ><b>${x.cantidad} X $${x.precio.toFixed(2)}</b></td>
        <td ><b>$${(x.cantidad * x.precio).toFixed(2)}</b></td>
        </tr>
        `
        contenedorC.append(card)

        let eliminar = document.createElement('td')
        eliminar.innerText = '❌'
        eliminar.className = 'delete-product'
        eliminar.id = 'delete'

        card.append(eliminar)
        eliminar.addEventListener('click', eliminarProducto)

    })


    const total = carritoLS.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement('div')
    totalBuying.className = ''

    if (carritoLS.length == 0) {
        totalBuying.innerHTML = `<p> El carro esta askjdhnfkjasrf</p>`
    } else {
        totalBuying.innerHTML = `<p> total a pagar: $${total} </p>`
    }

    totalBuying.id = 'total'
    contenedorC.append(totalBuying)

    contadorCarrito(carritoLS)
}



eliminarProducto = () => {
    const foundID = carritoLS.find((element) => element.id);
    const foundIndex = carritoLS.findIndex((element) => element.id === foundID.id);

    if (foundIndex !== -1) {
        if (carritoLS[foundIndex].cantidad > 1) {
            carritoLS[foundIndex].cantidad -= 1;
            localStorage.setItem('productosSelecionados', JSON.stringify(carritoLS));
            contenedorC.innerHTML = '';
            mostrarCarrito();
            alertaProductoEliminado();
        } else {
            carritoLS = carritoLS.filter((carritoId) => carritoId !== foundID);
            localStorage.setItem('productosSelecionados', JSON.stringify(carritoLS));
            contenedorC.innerHTML = '';
            mostrarCarrito();
            alertaProductoEliminado();
        }
    }
};





vaciarCarrito = () => {
    localStorage.setItem("productosSelecionados",[]);
    location. reload()
}


mostrarCarrito()



