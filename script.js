// @ts-noch
        document.addEventListener("DOMContentLoaded", function() {
            // Selecciona todas las imágenes del carrusel
            const images = document.querySelectorAll('.carrusel img');
            let currentIndex = 0;
        
            // Verifica si hay imágenes en el carrusel
            if (images.length === 0) {
                return;
            }
        
            // Función para cambiar la imagen activa
            function changeImage() {
                // Quita la clase 'active' de la imagen actual
                images[currentIndex].classList.remove('active');
        
                // Incrementa el índice para mostrar la siguiente imagen
                currentIndex = (currentIndex + 1) % images.length;
        
                // Añade la clase 'active' a la nueva imagen
                images[currentIndex].classList.add('active');
            }
        
            // Inicia el carrusel con la primera imagen
            images[currentIndex].classList.add('active');
        
            // Cambia la imagen cada 3 segundos
            setInterval(changeImage, 3000);
        }); // Agregué este cierre de llave y paréntesis