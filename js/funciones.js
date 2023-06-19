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


vaciarTodo = () => {
    localStorage.removeItem("carritoLS");
}


contadorCarrito = () => {

  
const cantidadCarrito = document.getElementById('cantidadCarrito')
        
const cantProd = carritoLS.reduce((acc, el) => acc + el.cantidad, 0)
console.log(cantProd )

    cantidadCarrito.style.display ='block'
    cantidadCarrito.innerText = cantProd 

}


// const cantidadCarrito = document.getElementById('cantidadCarrito')

// const cantProd = carritoLS.reduce((acc, el) => acc + el.cantidad, 0)


// const carritoCounter = () => {
//     cantidadCarrito.style.display = 'block'
//     cantidadCarrito.innerText = cantProd
// }






cargarProductosLS = () =>{
return  JSON.parse(localStorage.getItem("productosSelecionados"));
contadorCarrito()
}


