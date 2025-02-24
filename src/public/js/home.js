// Inicializa el socket
const socket = io();

// Función de notificación genérica
const showMessage = (message, type = "success") => {
  if (type === "error") {
    errorMessage(message, type);
  } else {
    successMessage(message);
  }
};

// Función para eliminar un producto
const deleteProduct = (index) => {
  confirmMessage("¿Estás seguro de eliminar el producto?", () => {
    socket.emit("deleteProduct", index);
  });
};

// Escucha el evento deletedProduct, de confirmación de eliminación de producto
socket.on("deletedProduct", (data) => {
  const { products, deletedProduct } = data;
  showMessage(`Producto eliminado: ${deletedProduct.name}`);
  renderProductList(products);
});

// Escucha el evento createdProduct, de confirmación de creación de producto
socket.on("createdProduct", (products) => {
  showMessage("Nuevo producto agregado");
  renderProductList(products);
});

// Función para renderizar la lista de productos
const renderProductList = (products) => {
  const productList = document.getElementById("productList");

  if (products.length === 0) {
    productList.innerHTML = "<p>No hay productos disponibles.</p>";
    return;
  }

  const productHTML = products
    .map(
      (product, index) => `
      <div class="product-card">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="description">${product.description}</p>
          <div class="product-details">
            <span class="stock">Stock: ${product.stock}</span>
            <span class="price">$${product.price}</span>
            <span><button class="delete-button" onclick="deleteProduct(${index})">Eliminar</button></span>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  productList.innerHTML = productHTML;
};

// Función para alternar entre vistas
const toggleView = (viewId) => {
  const views = ["createProductView", "productListView"];

  // Ocultar todas las vistas
  views.forEach(
    (view) => (document.getElementById(view).style.display = "none")
  );

  // Mostrar la vista seleccionada
  document.getElementById(viewId).style.display = "block";

  // Actualizar la clase activa de los botones de navegación
  document
    .querySelectorAll(".nav-button")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.nav-button[data-view=${viewId}]`)
    .classList.add("active");
};

// Función para mostrar la lista de productos
const showProductList = () => {
  toggleView("productListView");

  socket.emit("newUser", socket.id);
  socket.on("products", (products) => {
    renderProductList(products);
  });
};

// Iniciar mostrando la lista de productos por defecto
document.addEventListener("DOMContentLoaded", function () {
  showProductList();
});
