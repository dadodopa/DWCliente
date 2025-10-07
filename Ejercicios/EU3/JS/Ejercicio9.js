
digitosControl=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
function calcular() {
    let valor = document.getElementById("valor").value
    let nif;
    switch (valor[0]) {
        case "X":
            nif=valor.replace("X",0);
            break;
        case "Y":
            nif=valor.replace("Y",1);
            break;
        case "Z":
            nif=valor.replace("Z",2);
            break;
        default:
            nif=valor;
            break;
    }
    letra=nif%23;
document.getElementById("letra").innerHTML=`${digitosControl[letra]}`;
}