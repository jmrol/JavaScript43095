



const cantidadCarrito = document.getElementById('cantidadCarrito')
const carritoCounter = () =>{
    cantidadCarrito.style.display ='block'
    cantidadCarrito.innerText = carritoLS.length
}

carritoCounter()
console.log(carritoLS.length)