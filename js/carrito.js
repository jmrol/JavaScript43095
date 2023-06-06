

class ArrayObjeto {
    constructor(obj) {
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.precio = obj.precio;
        this.imagen = obj.imag;
        this.cantidad = obj.cantidad
    }
}

//////
const almacenadosls = JSON.parse(localStorage.getItem("productosSelecionados"));
let carritoLS = [];

/////
let contenedorC = document.getElementById('carro_compras')


for (const objeto of almacenadosls) {
    carritoLS.push(new ArrayObjeto(objeto));
}


const mostrarCarrito = () => {

    carritoLS.forEach((x) => {

        let card = document.createElement('div')
        card.innerHTML = `
            <div class="cards-carrito" id= "card-carritol">
            <div class="imagenes-carrito">
            <img src="${x.imagen}" alt=""  id= "img-carrito-card" >
            </div>
        <div class="card-carrito-body" id= "card-carrito-body">
        <p class="">Precio: $${x.precio}</p>
        <p class="">${x.nombre}  </p>
        <p class="">Cantidad ${x.cantidad} </p>
        <p class="">Total ${x.cantidad * x.precio} </p>
        </div>
        </div> 
        `
        contenedorC.append(card)

        let eliminar = document.createElement('span')
        eliminar.innerText = '❌'
        eliminar.className = 'delete-product'
        eliminar.id = 'delete'
       
        contenedorC.append(eliminar)
        eliminar.addEventListener('click', eliminarProducto)
    })
    ////fin for

    const total = carritoLS.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement('div')
    totalBuying.className = ''
    totalBuying.innerHTML = `<p> total a pagar: $${total} </p>`
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
}
mostrarCarrito()

// Swal.fire('Any fool can use a computer')

const alertaEliminar = document.querySelector('#delete')
alertaEliminar.addEventListener('click', () => {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    window.location.reload()
    // Swal.fire('Any fool can use a computer')
    })



    
    








