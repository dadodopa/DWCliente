function calcular() {
    let nombrePC = document.getElementById("nombrepc").value
    const regex = /^(DOC|025P)(\d{3})([ABC])$/;
    const match = nombrePC.match(regex);
    if (!match) {
        document.getElementById("resultado").innerHTML = `El formato es incorrecto(usa DOCXXXT o 025XXXT)`;
        return;
    }
    const numero = parseInt(match[2]);
    const letra = match[3];

    if (numero < 0 || numero > 252) {
        document.getElementById("resultado").innerHTML = `El número debe estar entre 000 y 252`;
        return;
    }
    let ip = "";
    switch (letra) {
        case "A":
            ip="10.42.68."+numero
            break;
        case "B":
            ip = "10.42.69." + numero;
            break;
        case "C":
            ip = "10.52.178." + numero;
            break;
        default:
            document.getElementById("resultado").innerHTML = `Se a produccido un error`;
            break;
    }
    document.getElementById("resultado").innerHTML = `La ip del equipo es ${ip}`;
}