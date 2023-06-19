
let productos = []

  fetch('/data.json')
  .then(res => res.json())

    .then((data) => {
        cargarProductos(data)
    
    })
 
  
   

    
    cargarProductos = (data) => {
      
    var carrito = []
    productos = data;
    
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

function filtrarProductos(data) {
    let product = data;
    let textoBusqueda = document.getElementById("textoBusqueda").value;
    let contenido = "";

    product = textoBusqueda ? product.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : product;

    if (product.length > 0) {
        product.forEach(x => {
            contenido += `<div class="col-md-3 mb-5">
            <a href="ver-producto.html" onclick="verProducto(${x.id})" class="text-decoration-none">
                <div class="card text-center border border-0">
                    <img src="${x.imagen}" class="card-img-top" alt="${x.nombre}">
                    <div class="card-body">
                        <p class="card-text text-primary"><b>$${x.precio}</b></p>
                        <p class="text-secondary">${x.nombre}</p>
                    </div>
                </div>
            </a>
            </div>`;
        });
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos por el término de búsqueda!</div>`;
    }
    
    document.getElementById("card-productos").innerHTML = contenido;
}