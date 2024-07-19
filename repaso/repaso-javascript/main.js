var nombre = 'cinlo';
var altura = 1.75;
/*
var concatenacion = nombre + ' ' + altura

let datos = document.getElementById('datos')

datos.innerHTML = `
    <h1>Soy la caja de datos </h1>
    <h2> Mi nombre es ${nombre}</h2>
    <h3>Mido : ${altura}<h3>`

    if(altura <= 1.65) {
        datos.innerHTML += 'Eres una persona de altura media'
    }else {
        datos.innerHTML += 'Eres una persona de altura alta'
    }

    for(let i = 2000; i <= 2020; i++){
        datos.innerHTML += '<h2>Estamos en el año:' +i;
    }


function muestraMiNombre(nombre, altura) {
    let misDatos = `
        <h1>Soy la caja de datos </h1>
        <h2> Mi nombre es ${nombre}</h2>
        <h3>Mido : ${altura}<h3>`

        return misDatos     
}
function imprimir() {
    let datos = document.getElementById('datos')
    datos.innerHTML = muestraMiNombre('cinlo', 1.65)
}

imprimir()

for(let i = 0; i < nombres.length ; i++) {
    document.write(nombres[i] + '<br>')
}
*/

let nombres = ['Victor', 'Maximo', 'Julian']

nombres.forEach((nombre) => {
    document.write(nombre + '<br>')
})