function calcular() {
    let radio = document.getElementById("numero").value;

    let diametro = radio * 2;
    let circunferencia = 2 * Math.PI * radio;
    let area = Math.PI * Math.pow(radio, 2);
    let areat = 4 * Math.PI * Math.pow(radio, 2);
    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    document.getElementById(
        "resultado"
        ).innerHTML = `El radio es ${radio} cm<br>El diametro es ${diametro} cm<br>El perimetro de la circunferencia es: ${circunferencia.toFixed(2)} cm<br>El area es: ${area.toFixed(2)} cm2<br>El area total es: ${areat.toFixed(2)} cm2<br>El volumen es: ${volumen.toFixed(2)} cm3`;
}
