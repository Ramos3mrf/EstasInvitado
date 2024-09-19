document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todas las imágenes del carrusel
    const images = document.querySelectorAll('.carrusel img');
    let currentIndex = 0;

    if (images.length === 0) {// Verifica si hay imágenes en el carrusel
        return;
    }

    // Función para cambiar la imagen activa
    function changeImage() {
        images[currentIndex].classList.remove('active');// Quita la clase 'active' de la imagen actual
        currentIndex = (currentIndex + 1) % images.length;// Incrementa el índice para mostrar la siguiente imagen
        images[currentIndex].classList.add('active');// Añade la clase 'active' a la nueva imagen
    }

    images[currentIndex].classList.add('active');// Inicia el carrusel con la primera imagen
    setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos
}); 