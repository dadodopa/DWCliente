function ejecuta(){
    let anho= document.getElementById("anho").value;
    let mes= (document.getElementById("mes").value-1);
    let dia= document.getElementById("dia").value;
    let array =[];
    const anhoActual= new Date().getFullYear();

    for (let i = anhoActual; i < 2101; i++) {
            let fecha= new Date(i,mes,dia);
            let diasemana= fecha.getDay();
            if (diasemana==0) {
                array.push(i);
            }
        
    }
    document.getElementById("resultado").innerHTML=`Los años ${array} te coincide el cumpleaños en domingo`;
}

