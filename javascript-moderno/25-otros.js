// separadores numericos
let number = 4_000_000
console.log(typeof number, number)

//replace y replaceAll
let str = 'Voy en mi coche nuevo por la carretera'
let new_str = str.replace('coche', 'ciclomotor')
console.log(new_str)

//replaceAll
let str2 = 'Voy en mi coche nuevo por la carretera, y veo otro coche'
let new_str2 = str2.replaceAll('coche', 'ciclomotor')
console.log(new_str2)

//asignadores logicos
let name = 'Cinlo'; // || si name existe se le da ese valor, sino el valor id
let id = 18;

name ||= id;

console.log(name)

//&&  los dos valores deben dar true
let name1 = 'Cinlo';
let id1 = 18;

name1 ||= id1;

console.log(name1)

