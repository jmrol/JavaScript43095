let productos = []

  fetch('/data.json')
  .then(res => res.json())
    // .then(data => console.log(data))

    .then((data) => {
        cargarProductos(data)
    })

    cargarProductos = (data) => {
        productos = data;
    var carrito = []
    
    
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
      alertaProductoAgregado()
     })
})
}

