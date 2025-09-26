let respuesta= prompt("Introduce la edad");
let mensaje="";
switch(true){
    case (respuesta>0 && respuesta<13):
        mensaje= "Niño";
        break;
    case (respuesta>12 && respuesta<27):
        mensaje= "Joven";
        break;
    case (respuesta>26 && respuesta<61):
        mensaje= "Adulto";
        break;
    case (respuesta>60):
        mensaje= "Jubilado"
    default:
        mensaje= "El valor no es válido"
}
alert(mensaje);