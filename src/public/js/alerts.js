const successMessage = (message) => {
  Swal.fire({
    title: `${message}`,
    icon: "success",
    customClass: {
      title: "game-title-success",
    },
    background: "#1e1e1e", // Fondo oscuro
    color: "#00FF00", // Texto en verde neón
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true, // Barra de progreso
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      // Se puede poner un sonido o efecto aquí
    },
  });
};

const errorMessage = (message) => {
  Swal.fire({
    title: `${message}`,
    icon: "error",
    customClass: {
      title: "game-title-error",
    },
    background: "#1e1e1e", // Fondo oscuro
    color: "#FF0000", // Texto en rojo neón
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true, // Barra de progreso
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      // Sonido de error si deseas agregarlo
    },
  });
};

const confirmMessage = (message, callbackFunction) => {
  Swal.fire({
    text: `${message}`,
    icon: "warning",
    background: "#333", // Fondo oscuro
    color: "#FFFF00", // Texto en amarillo neón
    showCancelButton: true,
    confirmButtonColor: "#28a745", // Verde neón
    cancelButtonColor: "#d33", // Rojo neón
    confirmButtonText: "¡Sí, confirmo!",
    cancelButtonText: "Cancelar",
    customClass: {
      title: "game-title-warning",
    },
    didOpen: () => {
      Swal.showLoading();
    },
  }).then((result) => {
    if (result.isConfirmed) {
      callbackFunction();
    }
  });
};
