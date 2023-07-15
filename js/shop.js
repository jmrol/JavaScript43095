
let productos = []

const cargarProductos = (data) => {
    let carrito = []

    const productosSeleccionadosLS = localStorage.getItem('productosSelecionados');
    if (productosSeleccionadosLS) {
        carrito = JSON.parse(productosSeleccionadosLS);
    }

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

            class ArrayObjeto {
                constructor(obj) {
                    this.id = obj.id;
                    this.nombre = obj.nombre;
                    this.precio = obj.precio;
                    this.imagen = obj.imag;
                    this.cantidad = obj.cantidad
                }
            }

            localStorage.setItem('productosSelecionados', JSON.stringify(carrito))
            let almacenadosls = cargarProductosLS()
            let carritoLS = [];
            for (const objeto of almacenadosls) {
                carritoLS.push(new ArrayObjeto(objeto));
            }

            alertaProductoAgregado();
            contadorCarrito(carritoLS);
        });
    })
}

fetch('../data.json')
    .then(res => res.json())
    .then((data) => {
        cargarProductos(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });

function filtrarProductos() {

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
    fetch('/data.json')
        .then(res => res.json())
        .then((data) => {
            filtro(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}