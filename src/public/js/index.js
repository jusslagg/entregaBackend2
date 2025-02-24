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

// Función para validar el formulario
const validateForm = (formData) => {
  const errors = {};

  if (formData.name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres";
  }
  if (formData.description.trim() === "") {
    errors.description = "La descripción es requerida";
  }
  if (formData.stock < 0) {
    errors.stock = "El stock no puede ser negativo";
  }
  if (formData.price <= 0) {
    errors.price = "El precio debe ser mayor a 0";
  }

  return errors;
};

// Función para crear un nuevo producto
const createProduct = (formData) => {
  const errors = validateForm(formData);

  if (Object.keys(errors).length > 0) {
    showMessage(Object.values(errors).join(". "), "error");
    return false;
  }

  showMessage("Producto creado correctamente");
  socket.emit("newProduct", formData);

  return true;
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
  showMessage(`Producto eliminado ${deletedProduct.name}`);
  renderProductList(products);
});

// Escucha el evento createdProduct, de confirmación de creación de producto
socket.on("createdProduct", (products) => {
  showMessage("Nuevo producto agregado");
  renderProductList(products);
});

// Escuchar el evento submit del formulario
document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: this.name.value.trim(),
    description: this.description.value.trim(),
    stock: parseInt(this.stock.value),
    price: parseFloat(this.price.value),
  };

  if (createProduct(formData)) {
    this.reset();
  }
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

// Función para mostrar el formulario de creación de producto
const showCreateProduct = () => {
  toggleView("createProductView");
};

// Función para mostrar la lista de productos
const showProductList = () => {
  toggleView("productListView");

  socket.emit("newUser", socket.id);
  socket.on("products", (products) => {
    renderProductList(products);
  });
};

// Función para alternar entre vistas
const toggleView = (viewId) => {
  document.getElementById("createProductView").style.display =
    viewId === "createProductView" ? "block" : "none";
  document.getElementById("productListView").style.display =
    viewId === "productListView" ? "block" : "none";

  document
    .querySelectorAll(".nav-button")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.nav-button[data-view=${viewId}]`)
    .classList.add("active");
};

// Función para inicializar la vista por defecto
document.addEventListener("DOMContentLoaded", function () {
  showCreateProduct();
});
