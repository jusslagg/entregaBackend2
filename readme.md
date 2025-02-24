# Proyecto: Tienda de Videojuegos 🎮🛒

Este proyecto es una **aplicación web** para gestionar una tienda de videojuegos, utilizando tecnologías como **Socket.IO**, **SweetAlert**, **Handlebars** y **CSS** para una experiencia interactiva y dinámica. Permite crear, visualizar y eliminar productos, todo en tiempo real gracias a la integración con **Socket.IO**.

## Tecnologías Utilizadas ⚙️

- **Frontend**:

  - **HTML**: Estructura básica de la interfaz.
  - **CSS**: Estilos personalizados con un diseño inspirado en videojuegos.
  - **JavaScript**: Lógica de interacción en el navegador, incluyendo la integración con Socket.IO y la validación de formularios.
  - **SweetAlert**: Para mostrar alertas estilizadas de tipo **éxito**, **error** y **confirmación**.
  - **Handlebars**: Motor de plantillas para la visualización dinámica de los productos.

- **Backend**:

  - **Socket.IO**: Para gestionar la comunicación en tiempo real entre el cliente y el servidor. Permite actualizar la lista de productos sin necesidad de recargar la página.

## Funcionalidades 🎯

1. **Gestión de productos**:

   - **Crear productos**: Los usuarios pueden añadir productos con nombre, descripción, cantidad de stock y precio.
   - **Eliminar productos**: Los usuarios pueden eliminar productos existentes.
   - **Lista de productos**: La tienda muestra una lista de productos disponibles con sus detalles, como nombre, descripción, stock y precio.

2. **Interacción en tiempo real** 🔄:

   - Gracias a **Socket.IO**, los productos se actualizan en tiempo real en todos los clientes cuando se crean o eliminan.

3. **Estilo y diseño** 🖥️:

   - El diseño visual está inspirado en el estilo de los videojuegos, con botones, alertas y elementos interactivos que imitan la estética de los videojuegos retro y modernos.

4. **Alertas personalizadas** ⚡:

   - **SweetAlert** se utiliza para mostrar mensajes de éxito, error y confirmación de forma estilizada.

## Estructura del Proyecto 📂

/Tienda-Videojuegos
├── /assets
│ ├── /css # Archivos de estilo CSS
│ ├── /img # Imágenes relacionadas con el proyecto
├── /js
│ ├── script.js # Lógica principal del frontend
├── /templates
│ ├── layout.hbs # Plantilla principal de Handlebars
├── /index.html # Página de inicio
├── /README.md # Documentación del proyecto
├── /package.json # Configuración de dependencias (npm)
└── /server.js # Lógica del backend (Servidor Node.js con Express y Socket.IO)

## Instalación 🔧

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tuusuario/Tienda-Videojuegos.git
   cd Tienda-Videojuegos
   ```

## Funciones Clave 🔑

### Socket.IO 🔌

El uso de **Socket.IO** en este proyecto permite la actualización dinámica de los productos en tiempo real, sin la necesidad de recargar la página. Los productos se crean y se eliminan en el servidor, y esa información se refleja automáticamente en todos los clientes conectados.

### SweetAlert 💬

Se utilizan **alertas personalizadas** para mejorar la experiencia del usuario. Se incluyen alertas de **éxito** (cuando se crea un producto), **error** (cuando ocurre algún problema en la validación) y **confirmación** (antes de eliminar un producto).

### Handlebars 🖋️

La librería **Handlebars** se usa para la visualización de los productos en la interfaz de usuario. Se asegura de que el contenido se actualice dinámicamente, facilitando el proceso de renderización de datos y mejorando la experiencia de usuario.

## Estilo Visual 🎮

El estilo de la página está inspirado en el diseño de **videojuegos** . Algunos aspectos destacados son:

- **Botones** con efectos hover para simular la experiencia interactiva de un videojuego.
- **Alertas personalizadas** que aparecen como mensajes en pantalla al estilo de videojuegos, con colores brillantes y transiciones suaves.
- **Tarjetas de productos** con transiciones de hover que hacen que los elementos cobren vida al pasar el cursor sobre ellos.
