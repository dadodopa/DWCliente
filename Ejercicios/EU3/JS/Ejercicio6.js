function calcular(params) {
    let nombre=document.getElementById("nombre").value;
    let nombreSinEspacios = nombre.replace(/\s/g, '');
    let nombreSeparado = nombre.split(" ");
    document.getElementById("resultado").innerHTML=`<h3>1.El tamaño del nombre más los apellidos (sin contar los espacios):</h3> ${nombreSinEspacios.length}<br>
    <h3>2. La cadena en minúsculas y en mayúsculas:</h3><br>${nombre.toLowerCase()}<br>${nombre.toUpperCase()}<br><h3>3.El nombre y los apellidos separados:</h3> <br>Nombre: ${nombreSeparado[0]}<br>
    Apellido 1: ${nombreSeparado[1]}<br>Apellido 2: ${nombreSeparado[2]}<br> <h3>4. Una propuesta de nombre de usuario:</h3>  ${nombreSeparado[0][0].toLowerCase()}${nombreSeparado[1].toLowerCase()}${nombreSeparado[2][0].toLowerCase()}
    <h3>5. Una propuesta de nombre de usuario:</h3>  ${nombreSeparado[0].slice(0,2).toLowerCase()}${nombreSeparado[1].slice(0,2).toLowerCase()}${nombreSeparado[2].slice(0,2).toLowerCase()}`
}

