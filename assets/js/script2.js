//Programación sincrónica // jquery
$(document).ready(function() {
    // Cuando el documento está listo, se ejecuta este bloque de código
    // Añade la clase 'section' al primer apartado al cargar la página
    // Control del DOM
    $('.container-fluid.my-5').addClass('section');

    // Cuando el usuario hace scroll, se activan animaciones en otras secciones
    // Uso de eventos y programación asincrónica
    $(window).on('scroll', function() {
        let windowHeight = $(window).height(); // Altura de la ventana del navegador
        let scrollValue = $(window).scrollTop(); // Valor de desplazamiento vertical de la ventana

        // Para cada sección de juegos, control y exclusivos
        // Se comprueba si están visibles en la ventana del navegador
        // Si lo están, se les añade la clase 'section' para activar animaciones
        $('.juegos-container, .control-section, .exclusivos-section').each(function() {
            let positionFromTop = $(this).offset().top; // Posición de la sección desde la parte superior de la página

            // Si la sección está en el área visible de la ventana, añade la clase 'section'
            if (scrollValue > positionFromTop - windowHeight + 200) {
                $(this).addClass('section');
            }
        });
    });
});

//Alerta
function mostrarAlerta() {
    alert("Actualmente no tenemoas mas que ver :´(");
}

// Añadir un evento cuando el DOM esté completamente cargado // Javascript
document.addEventListener('DOMContentLoaded', function () {
    let modal = document.getElementById('exampleModal'); // Referencia al modal por su ID
    let video = document.getElementById('modalVideo'); // Referencia al video dentro del modal

    // Cuando el modal se oculta, se pausa el video y se reinicia al tiempo 0
    modal.addEventListener('hide.bs.modal', function () {
        video.pause(); // Pausa el video
        video.currentTime = 0; // Reinicia el video al inicio
    });
});


//jquery
$(document).ready(function() {
    // Cuando el documento esté listo, agrega un evento de clic al botón con el ID 'mostrar-mas-juegos'
    $('#mostrar-mas-juegos').on('click', function() {
        // Llama a la función cargarMasJuegos cuando se haga clic en el botón
        cargarMasJuegos();
    });

    // Define la función cargarMasJuegos
    function cargarMasJuegos() {
        // Realiza una solicitud AJAX
        $.ajax({
            url: 'https://api.jsonbin.io/v3/b/667d8ae6ad19ca34f87fb1fb', // URL del bin en JSONBin
            method: 'GET', // Método de solicitud
            headers: {
                'X-Master-Key': '$2a$10$xFmsAS9vaiz14nbbLK11BeJ654brbCggM047nGW6qYn2e2P8nSiPi', // Clave maestra de JSONBin
            },
            dataType: 'json', // Tipo de datos esperados
            success: function(response) {
                console.log(response); // Muestra la respuesta en la consola para verificar la estructura

                let juegos = response.record; // Extrae la lista de juegos de la respuesta

                // Limpia el contenedor antes de agregar nuevos juegos
                $('#nuevos-juegos').empty();

                // Itera sobre cada juego y construye el HTML con las clases y estructura original
                juegos.forEach(function(juego) {
                    let juegoHtml = `
                        <div class="col-md-4 juego-item">
                            <div class="image-overlay">
                                <img class="img-fluid rounded img-bl" src="${juego.imagen}" alt="${juego.nombre}" />
                                <div class="overlay">
                                    <div class="overlay-content text-center">
                                        <p>${juego.descripcion}</p>
                                        <a href="#" class="btn btn-primary btnBuy">Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <h5>${juego.nombre}</h5>
                        </div>`;

                    // Agrega el HTML del juego al contenedor
                    $('#nuevos-juegos').append(juegoHtml);
                });
            },
            error: function(error) {
                // Muestra un mensaje de error en la consola si la solicitud falla
                console.error('Error al cargar los nuevos juegos:', error);
            }
        });
    }
});
