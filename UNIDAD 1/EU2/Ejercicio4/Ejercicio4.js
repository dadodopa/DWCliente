let respuesta= prompt("Introduce la edad");
let mensaje="";
if(respuesta>0 && respuesta<13){
        mensaje= "Niño";
    }else if(respuesta>12 && respuesta<27){
        mensaje= "Joven";
    }else if(respuesta>26 && respuesta<61){
        mensaje= "Adulto";
    }else if(respuesta>60){
        mensaje= "Jubilado";
    }else
        mensaje= "El valor no es válido";

alert(mensaje);