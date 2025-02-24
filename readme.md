# Proyecto: Tienda de Videojuegos

Este proyecto es una **aplicación web** para gestionar una tienda de videojuegos, utilizando tecnologías como **Socket.IO**, **SweetAlert**, **Handlebars** y **CSS** para una experiencia interactiva y dinámica. Permite crear, visualizar y eliminar productos, todo en tiempo real gracias a la integración con **Socket.IO**.

## Tecnologías Utilizadas

- **Frontend**:

  - **CSS**: Estilos personalizados con un diseño inspirado en videojuegos.
  - **JavaScript**: Lógica de interacción en el navegador, incluyendo la integración con Socket.IO y la validación de formularios.
  - **SweetAlert**: Para mostrar alertas estilizadas de tipo **éxito**, **error** y **confirmación**.
  - **Handlebars**: Motor de plantillas para la visualización dinámica de los productos.

- **Backend**:

  - **Socket.IO**: Para gestionar la comunicación en tiempo real entre el cliente y el servidor. Permite actualizar la lista de productos sin necesidad de recargar la página.

## Funcionalidades

1. **Gestión de productos**:

   - **Crear productos**: Los usuarios pueden añadir productos con nombre, descripción, cantidad de stock y precio.
   - **Eliminar productos**: Los usuarios pueden eliminar productos existentes.
   - **Lista de productos**: La tienda muestra una lista de productos disponibles con sus detalles, como nombre, descripción, stock y precio.

2. **Interacción en tiempo real**:

   - Gracias a **Socket.IO**, los productos se actualizan en tiempo real en todos los clientes cuando se crean o eliminan.

3. **Estilo y diseño**:

   - El diseño visual está inspirado en el estilo de los videojuegos, con botones, alertas y elementos interactivos que imitan la estética de los videojuegos retro y modernos.

4. **Alertas personalizadas**:

   - **SweetAlert** se utiliza para mostrar mensajes de éxito, error y confirmación de forma estilizada.
