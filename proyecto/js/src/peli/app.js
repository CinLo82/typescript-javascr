import Add from "./modules/add.js"

export default class App{

    constructor(){
        //inicializar propiedades
        this.add = new Add()

    }

    load(){
        //añadir peliculas
        this.add.peliSave()
        //listar peliculas

        // buscar peliculas

        console.log('La applicación de películas ha sido inicializada')
    }
}