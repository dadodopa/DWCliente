    manejarError();

    function manejarError() {
        const redirigir = confirm("Ha ocurrido un error. ¿Deseas ir a la página de error?");

        if (redirigir) {
            miVentana= window.open();
            window.location.replace("miVentana");
			miVentana.document.write("<h1>Error</h1>");
        }
    }

