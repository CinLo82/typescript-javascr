function toProyect(metadatos:any){

    return (constructor: Function) => {
        constructor.prototype.makeProjection = function():void{
            if(metadatos.activar){
            console.log('proyectando la pelicula', this.title)
            } else {
            console.log('Cine cerrado')
            }
        }

        constructor.prototype.addSelection = function():string[] {
            let movies = metadatos.selection
            movies.push(this.title)

            return movies
        }
    }
}
@toProyect({
    activar: true,
    selection:['Superman', 'El gran torino', 'Spiderman']
})
class Movie {
    constructor(
        public title: string,
        public gender: string,
        public projecting: boolean

    ) {}

}

let batman: any = new Movie('Batman Begins', 'Accion', false )
batman.makeProjection() // proyectando la pelicula
console.log(batman.addSelection())