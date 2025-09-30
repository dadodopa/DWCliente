function calcular() {
    let numero = parseInt(document.getElementById('numero').value);
    let exponencial = numero.toExponential();
    let decimales = numero.toFixed(4);
    let binario = numero.toString(2);
    let octal = numero.toString(8);
    let hexadecimal = numero.toString(16);
    document.getElementById('resultado').innerHTML=`El numero es: ${numero}<br>El exponencial: ${exponencial}<br>Con 4 decimales es: ${decimales}<br>En binario: ${binario}<br>En octal: ${octal}<br>En hexadecimal es: ${hexadecimal}`
}