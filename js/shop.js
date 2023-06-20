
var productos = []

  fetch('/data.json')
  .then(res => res.json())

    .then((data) => {
        cargarProductos(data)
        
    })
 



    
    cargarProductos = (data) => {
      
    var carrito = []
    productos = data;
    // console.log (data)
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
      contadorCarrito(carrito)

     })

})

}


fetch('/data.json')
.then(res => res.json())

  .then((data) => {
    filtrarProductos(data)

  })


function filtrarProductos(data) {

    let product = data;
    let textoBusqueda = document.getElementById("textoBusqueda").value;
    let contenido = "";
    console.log (data)
    product = textoBusqueda ? product.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : product;

    if (product.length > 0) {
        product.forEach(x => {
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
              contadorCarrito(carrito)
        
             })
        
        });
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos por el término de búsqueda!</div>`;
    }
    
    document.getElementById("card-productos").innerHTML = contenido;
}