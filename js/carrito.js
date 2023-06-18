class ArrayObjeto {
    constructor(obj) {
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.precio = obj.precio;
        this.imagen = obj.imag;
        this.cantidad = obj.cantidad
    }
}

const almacenadosls = JSON.parse(localStorage.getItem("productosSelecionados"));
let carritoLS = [] ;

let contenedorC = document.getElementById('carro_compras')

for (const objeto of almacenadosls) {
    carritoLS.push(new ArrayObjeto(objeto));
}

const mostrarCarrito = () => {
    carritoLS.forEach((x) => {

  let card = document.createElement('tr')
        card.innerHTML =
         `
        <td><img src="${x.imagen}" alt="" width="48"></td>
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

    if (carritoLS.length == 0 ) {
        totalBuying.innerHTML = `<p> El carro esta askjdhnfkjasrf</p>`
        } else {
            totalBuying.innerHTML = `<p> total a pagar: $${total} </p>`
        }

    totalBuying.id = 'total'

    contenedorC.append(totalBuying)
}

const eliminarProducto = () => {
    const foundID = carritoLS.find((element) => element.id)
    carritoLS = carritoLS.filter((carritoId) => {
        return carritoId !== foundID
    })
    localStorage.setItem('productosSelecionados', JSON.stringify(carritoLS))
    contenedorC.innerHTML = ''
    mostrarCarrito()
    console.log(carritoLS)

    Swal.fire({
        icon: false,
        title: 'El producto se elimino  carrito',
        showConfirmButton: false,
        toast: true,
        timer: 300,
      })

}

mostrarCarrito()


