miVentana = window.open("","","width=500,height=200");
let intervalo = setInterval(() => {
    miVentana.close();
}, 3000);
