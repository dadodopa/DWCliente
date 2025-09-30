/**Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de 
 * curso (por ejemplo, el 22 de junio). */
let fechaActual= Date.now();
let finCurso= new Date('2026-6-22');

let diff =finCurso-fechaActual;

let dias=Math.round(diff/(1000*60*60*24));
document.getElementById("texto").innerHTML= `Quedan ${dias} dias`;
