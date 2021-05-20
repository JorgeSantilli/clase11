const productosContainer = document.getElementById('productos-container');

for (let producto of productos) {
productosContainer.innerHTML += `
                <div class="col mb-4 mt-4">
                    <a class="card-link" href="http://www.google.com.ar">
                        <div class="card h-100">
                        <img src="images/${producto.imagen}" class="card-img-top" alt="Producto 1" />

                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>

                            <p class="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </p>
                        </div>

                        <div class="card-footer">
                            <small class="text-muted">$ ${producto.precio}</small>
                        </div>
                        </div>
                    </a>
                </div>`;}