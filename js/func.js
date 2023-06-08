
var carrito = []
// const cantidadCarrito = document.getElementById('cantidadCarrito')


let contenedor = document.getElementById('card-productos')

productos.forEach((x) => {
    let card = document.createElement('div')
    card.innerHTML = `
        <div class="cards-prod">
        <div class="contenedor-imagen">
        <img src="${x.imagen}" alt=""  id= "img-prod-card" >
        </div>
    <div class="card-body" id= "card-b">
    <p class="">Precio: $${x.precio}</p>
    <p class="">${x.nombre}</p>

    </div>
    </div>
    `
    contenedor.append(card)

    let comprar = document.createElement('button')
    comprar.id = 'prodAgregado'
    comprar.className = 'prodAgregado'
    comprar.innerText = 'Comprar'
    card.appendChild(comprar)

    comprar.addEventListener('click', () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === x.id)

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === x.id) {
                    prod.cantidad++
                }
            })
        } else {


            carrito.push({
                id: x.id,
                nombre: x.nombre,
                precio: x.precio,
                imag: x.imagen,
                cantidad: x.cantidad,


            })
        }
        localStorage.setItem('productosSelecionados', JSON.stringify(carrito))
    })

})


const prodAgregado = document.querySelector('.prodAgregado')
prodAgregado.addEventListener('click', () => {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        // close: true,
        // gravity: "top", // `top` or `bottom`
        // position: "left", // `left`, `center` or `right`
        // stopOnFocus: true, // Prevents dismissing of toast on hover
        // style: {
        //   background: "linear-gradient(to right, #00b09b, #96c93d)",
        // },
        // onClick: function(){} // Callback after click
      }).showToast();
    })