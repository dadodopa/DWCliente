const W = 500, H = 200;
let ventana = null;
let intervalo = null;
let x = 0, y = 0;
let dx = 10, dy = 10;

document.getElementById('crear').addEventListener('click', () => {
    // Evitar múltiples ventanas/intervalos
    if (ventana && !ventana.closed) return;
    if (intervalo) { clearInterval(intervalo); intervalo = null; }

    ventana = window.open('', 'ventanaMovil', `width=${W},height=${H},left=0,top=0`);
    if (!ventana) {
        alert('Popup bloqueado. Permite popups para esta página o usa la versión dentro de la página.');
        return;
    }

    // Contenido simple en la ventana
    ventana.document.write(`
        <!doctype html>
        <html><head><meta charset="utf-8"><title>Ventana Móvil</title></head>
        <body style="margin:0;display:flex;align-items:center;justify-content:center;font-family:sans-serif;">
          <div>Ventana en movimiento</div>
        </body></html>
      `);
    ventana.document.close();

    // Inicializar posición y dirección positiva
    x = 0; y = 0; dx = Math.abs(dx); dy = Math.abs(dy);
    iniciarMovimiento();
});

document.getElementById('parar').addEventListener('click', () => {
    if (intervalo) { clearInterval(intervalo); intervalo = null; }
});

document.getElementById('borrar').addEventListener('click', () => {
    if (intervalo) { clearInterval(intervalo); intervalo = null; }
    if (ventana && !ventana.closed) ventana.close();
    ventana = null;
});

function iniciarMovimiento() {
    if (!ventana || ventana.closed) return;
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => {
        // Si la ventana se cierra desde fuera, limpiamos
        if (!ventana || ventana.closed) { clearInterval(intervalo); intervalo = null; ventana = null; return; }

        // Límites usando pantalla disponible menos el tamaño pedido
        const maxX = screen.availWidth - W;
        const maxY = screen.availHeight - H;

        // En lugar de invertir simplemente, forzamos la dirección hacia adentro
        if (x >= maxX) dx = -Math.abs(dx);
        else if (x <= 0) dx = Math.abs(dx);

        if (y >= maxY) dy = -Math.abs(dy);
        else if (y <= 0) dy = Math.abs(dy);

        x += dx;
        y += dy;

        // Evitar desbordes por overshoot
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > maxX) x = maxX;
        if (y > maxY) y = maxY;

        try {
            ventana.moveTo(x, y);
        } catch (e) {
            // Algunos navegadores restringen moveTo; mostramos en consola
            console.warn('moveTo falló o está restringido por el navegador:', e);
        }
    }, 100);
}