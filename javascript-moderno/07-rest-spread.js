//spread
let heroes = ['Spiderman', 'Superman', 'Batman', 'Aquaman']

console.log(...heroes)

//-----------------------------------------------
function watchHeroes(heroe1, heroe2){
    console.log(`
        *****MIS DOS HEROES FAVORITOS*****
            -${heroe1}
            -${heroe2}
        Fin
        `)
}

watchHeroes(...heroes)

//------------------------------------------------
let SuperHeroes = ['Flash', 'Catwoman', ...heroes]
console.log(SuperHeroes)

// Rest representa un num indefinido de array como paramatro
function movie(movie1, movie2, ...movieRest){
    console.log(movie1)
    console.log(movie2)

    for(movie of movieRest){
        console.log(movie)
    }
}
movie('Batman', 'Superman', 'Batman vs Superman', 'Gran torino', 'Sin limites')
