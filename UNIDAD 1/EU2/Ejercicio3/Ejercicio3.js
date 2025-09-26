//Inicializamos las variables
let operacion1,operacion2,operacion3,operacion4,operacion5,operacion6,operacion7,operacion8,operacion9;
//A continuación le penemos el valor a las variables y realizamos un alert de cada operacion
//Las tres primeras operaciones dan true ya que es el mismo numero
operacion1=(10==10);
alert("La operación 10==10 es: "+ operacion1);
operacion2=(10===10);
alert("La operación 10===10 es: "+operacion2);
operacion3=(10 === 10.0);
alert("La operación 10===10.0 es: "+operacion3);
//Operación 4 da false da que es sensible a mayúsculas y minusculas
operacion4=("Laura" == "laura");
alert("La operación \"Laura\" == \"laura\" es: "+operacion4);
//*!Preguntar!!!!!!!!!!!! da false
operacion5=("Laura" > "laura");
alert("La operación \"Laura\" > \"laura\" es: "+operacion5);
//*!Preguntar!!!!!!!!!!!! da true
operacion6=("Laura" < "laura");
alert("La operación \"Laura\" < \"laura\" es: "+operacion6);
//Operación 7 da true ya que es el mismo número aunque sea un string el primero
operacion7=("123" == 123);
alert("La operación \"123\" == 123 es: "+operacion7);
//Operación 8 da false ya que es una comparación extricta y uno es un string y otro un int
operacion8=("123" === 123);
alert("La operación \"123\" === 123 es: "+operacion8);
//*!Preguntar!!!!!!!!!!!! da false
operacion9=parseInt("123")===123;
alert("La operación parseInt(\"123\") === 123 es: "+operacion8);

