alertaProductoAgregado= () => {
Toastify({
    text: "Producto agregado al carrito",
    duration: 1000,
    destination: "https://github.com/apvarun/toastify-js",
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
   }).showToast();
}


alertaProductoEliminado= () => {
    Swal.fire({
        icon: false,
        title: 'El producto se elimino  carrito',
        showConfirmButton: false,
        toast: true,
        timer: 300,
      })
}

//en uso
cargarProductosLS = () =>{
    return  JSON.parse(localStorage.getItem("productosSelecionados"));
    
    }
    



contadorCarrito = (arry) => {
 const cantidadCarrito = document.getElementById('cantidadCarrito')   
const cantProd = arry.reduce((acc, el) => acc + el.cantidad, 0)
console.log(cantProd )
    cantidadCarrito.style.display ='block'
    cantidadCarrito.innerText = cantProd 
}




// function filtrarProductos() {
//     let productos = cargarProductosLS();
//     let textoBusqueda = document.getElementById("textoBusqueda").value;
//     let contenido = "";

//     productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;

//     if (productos.length > 0) {
//         productos.forEach(producto => {
//             contenido += `<div class="col-md-3 mb-5">
//             <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
//                 <div class="card text-center border border-0">
//                     <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
//                     <div class="card-body">
//                         <p class="card-text text-primary"><b>$${producto.precio}</b></p>
//                         <p class="text-secondary">${producto.nombre}</p>
//                     </div>
//                 </div>
//             </a>
//             </div>`;
//         });
//     } else {
//         contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos por el término de búsqueda!</div>`;
//     }
    
//     document.getElementById("contenido").innerHTML = contenido;
// }


