let digitosControl=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
function calcular() {
    let valor=document.getElementById("NI").value;
        let nif;
        switch (valor.indexOf()) {
            case "X":
                nif =valor.replace("X","0");
                break;
            case "X":
                nif =valor.replace("Y","1");
                break;
            case "X":
                nif =valor.replace("Z","2");
                break;
            default:
                nif=valor;
                break;
        }
        numeroControl=nif%23;
        if (digitoControl[numeroControl]==) {
            
        }
    
}