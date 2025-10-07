let miventana=window.open("","Ventana","width=400,height=300");
    let fecha= new Date();
setTimeout(() => {
    fecha.getDate();
    miventana.open();
    miventana.document.write(fecha);
}, 2000);