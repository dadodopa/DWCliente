function calcular() {
    let valor=document.getElementById("info").value
    let info=valor.split(":");
    document.getElementById("cp").innerHTML = `El código postal: ${info[4]}`;
    document.getElementById("ap").innerHTML=`Los apellidos: ${info[1]}`;
    document.getElementById("email").innerHTML=`El email: ${info[3]}`;
    document.getElementById("dominio").innerHTML=`El dominio: ${info[3].slice(info[3].indexOf("@"))}`;
    document.getElementById("tlf").innerHTML=`El telefono: ${info[2]}`;
}