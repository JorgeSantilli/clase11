function agregarTarjeta(nombre, precio, imagen) {
  const card = `<div class="col mb-4 mt-4">
                    <a class="card-link" href="http://www.google.com.ar">
                        <div class="card h-100">
                        <img src="images/${imagen}" class="card-img-top" alt="Producto 1" />

                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>

                            <p class="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </p>
                        </div>

                        <div class="card-footer">
                            <small class="text-muted">$ ${precio}</small>
                        </div>
                        </div>
                    </a>
                </div>`;

  const productosContainer = document.getElementById('productos-container');

  productosContainer.innerHTML += card;
}

agregarTarjeta('Producto 1', 1000, 'img3.jpg');
agregarTarjeta('Producto 2', 2500, 'img2.jpeg');
agregarTarjeta('Producto 3', 5000, 'img1.webp');
agregarTarjeta('Producto 4', 160000, 'img3.jpg');
