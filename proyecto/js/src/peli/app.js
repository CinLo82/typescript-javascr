import Add from "./modules/add.js"
import List from "./modules/list.js"
import Storage from "./modules/storage.js"

export default class App{

    constructor(){
        //inicializar propiedades
        this.add = new Add()
        this.list = new List()
        this.storage = new Storage()

    }

    load(){
        //añadir peliculas
        this.add.peliSave()

        //conseguir array objetos localstorage
        const pelis = this.storage.getData()
        //listar peliculas
        this.list.show(pelis)
        // buscar peliculas

        console.log('La applicación de películas ha sido inicializada')
    }
}