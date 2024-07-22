"use strict";
let people = ['Cinlo', 'Nadia', 'Lucia'];
people.push('Carla');
let years = [2000, 2002, 2004];
years.push(2025);
console.log(people, years);
//tuplas => en este caso solo me permite q mi array tenga 3 elementos, y cada uno en su orden
let movie = ['Batman Begins', true, 1990];
console.log(typeof movie);
// Enum - enumeracion sirve para definir una serie de clases, y mantener esos elementos fijos, ya que no podran ser modificados. es como si fuera una constante solo de lectura
var personalInfo;
(function (personalInfo) {
    personalInfo["name"] = "cinlo";
    personalInfo[personalInfo["age"] = 20] = "age";
    personalInfo["country"] = "Argentina";
    personalInfo["city"] = "Buenos Aires";
})(personalInfo || (personalInfo = {}));
console.log(typeof personalInfo, personalInfo.name);
// cast -> convertir a otro tipo de dato
let text_unknow = 'Esto viene en una petición';
let str = text_unknow;
let text_unknow2 = '51278328';
let str2 = text_unknow2;
console.log(typeof str, str);
console.log(typeof str2, str2);
