
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
        // carritoCounter()
        // console.log(carrito)
        // console.log(productos)
        console.log(typeof carrito + 'sdfgh')
        localStorage.setItem('productosSelecionados', JSON.stringify(carrito))
    })

})
