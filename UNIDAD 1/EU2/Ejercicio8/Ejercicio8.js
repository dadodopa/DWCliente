do{
    let respuesta = prompt ("Introduce el apellido del primer presidente de la democracia");
    
    if(respuesta=="Adolfo"){
        respuesta = prompt("Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?");
    }else if(respuesta=="Suárez"){
        respuesta = prompt("Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?");
    } else{
        respuesta = prompt("ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?");
    }

} while(respuesta=="Adolfo Suárez")