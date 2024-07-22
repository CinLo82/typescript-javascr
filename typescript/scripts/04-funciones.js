"use strict";
// uso normal
function hello(name) {
    return 'Un saludo ' + name;
}
console.log(hello('Cinlo'));
//nada / void
function watchDate() {
    console.log('20 -07 - 2024');
}
watchDate();
//never / fin de la app, no sigue ejecutandose la app
function EndApp() {
    throw new Error('Fin de la app');
}
//EndApp()
//parametros 
function watchCountry(country, continent) {
    let result = 'faltan datos';
    if (country && continent) {
        result = `El pais ${country} esta en el continente ${continent}`;
    }
    return result;
}
console.log(watchCountry('Argentina', 'America'));
//tipo funcion
let groups;
groups = function (datos) {
    return 'Mis grupos favoritos son ' + datos.toString();
};
console.log(groups(['Callom Scott', 'Keane', 'The Killers']));
function tekken(personage, costume) {
    return `Mi personaje es ${personage} y lleva el atuendo ${costume}`;
}
console.log(tekken('Tigre', 4));
