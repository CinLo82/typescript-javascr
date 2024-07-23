interface Videojuego {
    title: string;
    category: string;
    years: number;
    duration?: number;
    released?: boolean;
    watch():void;
    update(consola: string):string
}


//clase
class Fifa implements Videojuego{

    constructor(
        public title: string,
        public category: string,
        public years: number,
        public duration?: number,
        public released?: boolean
    ){}
    watch():void{
        console.log(this.title, this.category, this.years)
    }
    update(consola: string){
        console.log('buscando actualizaciones...')
        return `Actualización para ${consola}`
    }
}

let fifa23: Videojuego = new Fifa('Fifa 23', 'Deportes', 3, 25, true)
console.log(fifa23.watch())

// interface de objeto literal
let gta:Videojuego = {
    title: 'Grand Theft Auto V',
    category: 'Acción',
    years: 18,
    watch(){
        console.log(this.title, this.category, this.years)
    },
    update(consola){
        console.log('buscando actualizaciones...')
        return `Actualización para ${consola}`
    }
}
console.log(gta)