let hora,minutos;
minutos=true;
hora=9;
while( hora<=21){
    if(minutos){
        document.writeln(hora+":00<br>");
        minutos=false;
    } else{
        document.writeln(hora+":30<br>")
        minutos= true;
        hora++
    }
}