function calcular() {
    let valor=document.getElementById("info").value
    let info=valor.split(":");
    document.getElementById("cd").innerHTML=`El código postal: ${info[4]}`
    document.getElementById("ap").innerHTML=`Los apellidos: ${info[1]}`
    document.getElementById("email").innerHTML=`El email: ${info[3]}`
    document.getElementById("dominio").innerHTML=`El dominio: ${info[3]} `
}