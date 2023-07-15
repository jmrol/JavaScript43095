
let productos = []

fetch('../data.json')
    .then(res => res.json())
    .then((data) => {
        cargarProductos(data)
    })

    .catch(error => {
        console.error('Error:', error);
    });

    const cargarProductos = (data) => {
    let carrito = []
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
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === x.id);

            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === x.id) {
                        prod.cantidad++;
                    }
                });
            } else {
                carrito.push({
                    id: x.id,
                    nombre: x.nombre,
                    precio: x.precio,
                    imag: x.imagen,
                    cantidad: x.cantidad,
                });
            }

            let carritoExistente = localStorage.getItem('productosSelecionados');

            if (carritoExistente) {
                carritoExistente = JSON.parse(carritoExistente);
                carrito.forEach((productoNuevo) => {
                    const productoExistente = carritoExistente.find((prod) => prod.id === productoNuevo.id);
                    if (productoExistente) {
                        productoExistente.cantidad += productoNuevo.cantidad;
                    } else {
                        carritoExistente.push(productoNuevo);
                    }
                });
            } else {
                carritoExistente = carrito;
            }

            localStorage.setItem('productosSelecionados', JSON.stringify(carritoExistente));
            alertaProductoAgregado();
            contadorCarrito(carritoExistente);
        });
    })
}

function filtrarProductos() {
    fetch('/data.json')
        .then(res => res.json())

        .then((data) => {
            filtro(data)
        })

        .catch(error => {
            console.error('Error:', error);
        });

    function filtro(data) {
        let productos = data;
        let textoBusqueda = document.getElementById("textoBusqueda").value;
        let contenido = "";

        productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;

        if (productos.length > 0) {
            productos.forEach(x => {
                contenido += `
            <div href="ver-producto.html" onclick="verProducto(${x.id})">
            <div class="cards-prod">
            <div class="contenedor-imagen">
            <img src="${x.imagen}" alt=""  id= "img-prod-card" >
            </div>
        <div class="card-body" id= "card-b">
        <p class="">Precio: $${x.precio}</p>
        <p class="">${x.nombre}</p>
    
        </div>
        </div>
        </div>
        `
            });
        } else {
            contenido += `<div class="no-encontrado" role="alert">No se encontraron productos en su búsqueda!</div>`;
        }

        document.getElementById("card-productos").innerHTML = contenido;
    }
}