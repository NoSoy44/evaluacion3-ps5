//Función1 jquery
$(document).ready(function () {
    $('.container-fluid.my-5').addClass('section');
    $(window).on('scroll', function () {
        let windowHeight = $(window).height();
        let scrollValue = $(window).scrollTop();

        $('.juegos-container, .control-section, .exclusivos-section').each(function () {
            let positionFromTop = $(this).offset().top;

            if (scrollValue > positionFromTop - windowHeight + 200) {
                $(this).addClass('section');
            }
        });
    });
});


//Alerta conn Plugin
function mostrarAlerta() {
    Swal.fire({
        icon: "error",
        title: "Actualmente no tenemos mas que ver :/",
        text: "Se vienen cositas..",
    });
}

//Función2 Javascript
$(document).ready(function () {
    let modal = document.getElementById('exampleModal');
    let video = document.getElementById('modalVideo');
    modal.addEventListener('hide.bs.modal', function () {
        video.pause();
        video.currentTime = 0; // Reinicia el video 
    });
});

//json
$(document).ready(function () {
    $('#mostrar-mas-juegos').on('click', function () {
        cargarMasJuegos();
    });

    function cargarMasJuegos() {
        $.ajax({
            url: 'https://nosoy44.github.io/NoSoy44-prueba2JsP3/juegos.json',
            method: 'GET',
            headers: {},
            dataType: 'json',
            success: function (response) {
                console.log(response);

                let juegos = response; // Directly assign the array


                juegos.forEach(function (juego) {
                    let juegoHtml = `
                        <div class="col-md-4 juego-item">
                            <div class="image-overlay">
                                <img class="img-fluid rounded" src="${juego.imagen}" alt="${juego.nombre}" />
                                <div class="overlay">
                                    <div class="overlay-content text-center">
                                        <p>${juego.descripcion}</p>
                                        <a href="#" class="btn btn-primary btnBuy">Comprar</a>
                                    </div>
                                </div>
                            </div>
                            <h5>${juego.nombre}</h5>
                        </div>`;

                    $('#nuevos-juegos').append(juegoHtml);
                });
            },
            error: function (error) {
                console.error('Error al cargar los nuevos juegos:', error);
                console.log('Detalles del error:', error.responseText);
            }
        });
    }
});


// Funcion 4
$(document).ready(function () {
    function abrirPag(url) {
        window.open(url, '_blank');
    }

    let magicBtn = document.getElementById('magicBtn');
    magicBtn.addEventListener('click', function() {
        abrirPag('https://www.playstation.com/es-cl/ps5/');
    });
});

//Funcion 5
$(document).ready(function () {
    let tiempoTrans= 0; // Tiempo en segundos
    let temporizador = document.getElementById('temp');

    setInterval(function() {
        tiempoTrans++;
        let minutos = Math.floor(tiempoTrans / 60);
        let segundos = tiempoTrans % 60;

        segundos = segundos < 10 ? '0' + segundos : segundos;

        temporizador.textContent = `Tiempo en la página: ${minutos}:${segundos}`;
    }, 1000);
});
