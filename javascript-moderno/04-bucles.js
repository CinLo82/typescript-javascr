let names = [
    'Victor',
    'Paco',
    'Pepe',
    'Juan',
]
/* bucle clasico
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}*/

// for of
for(let name of names){
    console.log(name);
}

// for in; muestra el indice en que se encuentra cada nombre
for(let indice in names){
    console.log(indice, names[indice]); 
}
// con for in tambien puedo recorrer un json para acceder a las claves que hay dentro de ese json.

// for Each
names.forEach(function(name, indice){   
    console.log(name, indice);
});

// iterables
const mi_iterable = names[Symbol.iterator]();

//console.log(typeof mi_iterable, mi_iterable)
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());

let fruit = {
    name: 'manzana',
    color: 'roja',
    temporada: 'invierno'
}

fruit[Symbol.iterator] = function() {
    let indice = 0;
    let valores = Object.values(this);

    return {
        next(){
            if(indice >= valores.length){
                return {
                    done: true,
                    value: undefined
                }
            }
            return {
                done: false,
                value: valores[indice],
                indice: indice++
            }
        }
    }
}

for(let property of fruit) {
    console.log(property);
}

for (let property in fruit){
    console.log(property, fruit[property]);
}