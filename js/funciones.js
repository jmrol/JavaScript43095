alertaProductoAgregado = () => {
    Toastify({
        text: "Producto agregado al carrito",
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
    }).showToast();
}

const alertaProductoEliminado = () => {
    Swal.fire({
        icon: false,
        title: 'El producto se elimino  carrito',
        showConfirmButton: false,
        toast: true,
        timer: 400,
    })
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productosSelecionados"));

}

const contadorCarrito = (arry) => {
    const cantidadCarrito = document.getElementById('cantidadCarrito')
    const cantProd = arry.reduce((acc, el) => acc + el.cantidad, 0)
    console.log(cantProd)
    cantidadCarrito.style.display = 'block'
    cantidadCarrito.innerText = cantProd
}


