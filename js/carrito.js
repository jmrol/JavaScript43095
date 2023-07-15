
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

const mostrarCarrito = () => {

    let vaciarCarro = document.createElement('div')
    vaciarCarro.className = ''

    vaciarCarro.innerHTML = `<button id="Vaciar" class="Vaciar-carrito">Vaciar Carrito  ❌</button>`

    vaciarCarro.id = 'Vaciar'

    contenedorC.append(vaciarCarro)
    vaciarCarro.addEventListener('click', vaciarCarrito)
    carritoLS.forEach((x) => {
        let card = document.createElement('tr')
        card.innerHTML =
            `
        <td><img src="${x.imagen}" alt="" width="200"></td>
        <td class="carrito-text">${x.nombre}</td>
        <td class="carrito-text" ><b>${x.cantidad} X $${x.precio.toFixed(2)}</b></td>
        <td class="carrito-text"><b>$${(x.cantidad * x.precio).toFixed(2)}</b></td>
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
        totalBuying.innerHTML = `<p class="carrito-text"> El carro esta vacio</p>`
    } else {
        totalBuying.innerHTML = `<br>
        <p class="carrito-text"> Total a pagar: $${total} </p>`
    }
    totalBuying.id = 'total'
    contenedorC.append(totalBuying)
    
    contadorCarrito(carritoLS)
}

const eliminarProducto = () => {
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

const vaciarCarrito = () => {
    localStorage.setItem("productosSelecionados", []);
    location.reload()
}

mostrarCarrito()



