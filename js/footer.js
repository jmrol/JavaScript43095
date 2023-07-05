function cargarFooter() {

let contenedorFooter = document.getElementById('Footer')

contenedorFooter .innerHTML = `
<div>
    <ul class="footer-comlunas">
      <li class="footer-titulos">LASER LED</li>
      <br>
      <li class="footer-text">Direccion: Paz 1050</li>
      <br>
      <li class="footer-text">Telefono: 2486541236</li>
      <br>
      <li class="footer-text">Mail: Laserled@sdasd</li>
    </ul>
  </div>
  <div>
    <ul class="footer-comlunas">
      <li class="footer-titulos">SHOP</li>
      <br>
      <li class="footer-text">Paneles</li>
      <br>
      <li class="footer-text">Fogones</li>
      <br>
      <li class="footer-text">Esculturas</li>
    </ul>
  </div> 
  <div>
  <ul class="footer-comlunas">
    <li class="footer-titulos">Comercial</li>
    <br>
    <li class="footer-text">Envios</li>
    <br>
    <li class="footer-text">Opciones de acabado</li>
    <br>
    <li class="footer-text">Proyectos especiales</li>
  </ul>
</div> 
`
} 
        cargarFooter()