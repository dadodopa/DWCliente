document.writeln("<h4>Tabla de multiplicar del 7:</h4>");
let numero=0;
while(numero<=10){
    document.writeln("7 X "+numero+" = "+numero*7+"<br>")
    numero++
}

document.writeln("<h4>Tabla de sumar del 8:</h4>");
numero=0;
do{
    document.writeln("8 + "+numero+" = "+(numero+8)+"<br>")
    numero++
} while(numero<=10)

document.writeln("<h4>Tabla de dividir del 9:</h4>")
for(numero=0;numero<=10;numero++){
    document.writeln(numero+" / 9 = "+(9/numero)+"<br>")
}

document.writeln("<h4>Divisiones de desplazamiento:</h4>");
document.writeln(`125 / 8 = ${125>>8}<br>`);
document.writeln(`40 * 4 = ${40<<4}<br>`);
document.writeln(`25 / 2 = ${25>>2}<br>`);
document.writeln(`10 * 16 = ${10>>16}`);