
let respuesta = prompt("Introduce el número de las siguientes opciones:\n1. Potencia.\n2. Raíz.\n3. Redondeo.\n4. Trigonometría.");
let numero,resultado;
switch (respuesta) {
    case "1":
        document.getElementById('titulo').innerHTML = 'Potencia';
        let base = prompt("Introduce la base:");
        let exponente = prompt("Introduce el exponente:")
        resultado = Math.pow(base,exponente);
        document.getElementById('resultado').innerHTML = `El resultado de ${base} elevado a ${exponente} es: ${resultado}`;
        break;
    case "2":
        document.getElementById('titulo').innerHTML = 'Raíz';
        numero = prompt("Introduce el número para hacer su raiz(tiene que ser positivo)");
        if(Math.sign(numero)!=-1){
            
        } else{
            resultado = Math.sqrt(numero);
            document.getElementById('resultado').innerHTML=`El resultado de la raíz de ${numero} es: ${resultado}`;
        }
        break;
    case "3":
        document.getElementById('titulo').innerHTML = 'Redondeo'; 
        numero = prompt("Introduce el número para ser redondeado:");
        resultado = Math.round(numero);
        document.getElementById('resultado').innerHTML=`El resultado del redondeo del ${numero} es: ${resultado}`;
        break;
    case "4":
        document.getElementById('titulo').innerHTML = 'Trigonometría';  // Mensaje para Trigonometría
            
        numero = prompt("Introduce un angulo(entre 0 y 360)");
        while (numero<0||numero>360) {
            numero= prompt("Error el angulo tiene que estár entre 0 y 360");
        }
            let seno = Math.sin(numero);
            let coseno = Math.cos(numero);
            let tangente = Math.tan(numero);
            document.getElementById('resultado').innerHTML=`El resultado del calcular el angulo ${numero} es: <br>Seno: ${seno}<br>Coseno: ${coseno}<br>Tangente: ${tangente}`;
        break;
    default:
        document.getElementById('titulo').innerHTML = 'Opción no válida';  // Mensaje por defecto si el número no está entre 1 y 4
        break;
}