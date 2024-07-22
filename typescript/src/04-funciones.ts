// uso normal
function hello(name: string): string {
    return 'Un saludo ' + name
}
console.log(hello('Cinlo'))

//nada / void
function watchDate(): void {    
    console.log('20 -07 - 2024')
}

watchDate()

//never / fin de la app, no sigue ejecutandose la app
function EndApp(): never{
    throw new Error('Fin de la app')
}
//EndApp()

//parametros 
function watchCountry(country?: string, continent?: string): string {
    let result:string = 'faltan datos'
    if (country && continent) {
        result = `El pais ${country} esta en el continente ${continent}`
        }
    return result
}
console.log(watchCountry('Argentina', 'America'))

//tipo funcion
let groups: (datos:string[]) => string;

groups = function(datos: string[]){
    return 'Mis grupos favoritos son ' + datos.toString()
} 
console.log(groups(['Callom Scott', 'Keane', 'The Killers']))

// tipos de datos literales -> 1 | 2 | 3 | 4 esto me obliga a pasarle alguno de estos datos a la func
// tipo de dato personalizado
type traje = 'espacial' | 1 | 2 | 3 | 4 | 'comprado';

function tekken(personage:string, costume: traje ): string {
    return `Mi personaje es ${personage} y lleva el atuendo ${costume}`
}
console.log(tekken('Tigre', 4))
