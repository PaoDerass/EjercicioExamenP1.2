
const apiUrl = "https://fakestoreapi.com/products";
async function fetchProducts() {
    try {
        const respuesta = await fetch(apiUrl);
        const productos = await respuesta.json();
        displayProductos(productos);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

function displayProductos(productos) {
    const listaProducto = document.getElementById("lista-producto");
    productos.forEach(producto => {
        const productoCard = document.createElement("div");
        productoCard.className = "col-md-4";

        productoCard.innerHTML = `
            <div class="card">
                <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text"><strong>Precio:</strong> $${producto.price}</p>
                    <p class="card-text"><strong>Categoría:</strong> ${producto.category}</p>
                    <p class="card-text">${producto.description}</p>
                </div>
            </div>
        `;
        listaProducto.appendChild(productoCard);
    });
}


fetchProducts();
