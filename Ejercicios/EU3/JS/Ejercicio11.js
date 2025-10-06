if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (posicion) {
            const lat = posicion.coords.latitude;
            const lon = posicion.coords.longitude;
            console.log("Latitud: " +lat+" Longitud: "+lon)
                
        },
    );
}
