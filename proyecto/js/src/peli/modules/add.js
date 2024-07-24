import Storage from "./storage.js";

export default class Add{

    constructor(){
        this.storage = new Storage()

        //conseguir elementos del dom a utilizar
        this.title_field = document.querySelector('#title');
        this.description_field = document.querySelector('#description');
        this.save_btn = document.querySelector('#add')
    }

    peliSave(){
        this.save_btn.onclick = (e) => {
            e.preventDefault();
            //conseguir datos actualizados
            let pelis = this.storage.getData()
            let lastId = this.storage.getLastId()
            console.log('Pelis:', pelis, lastId)

            //datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;
            // validacion
            if(title === '' || description === ''){
                console.log('debes llenar todos los campos')
                
            }else{
                // crear objeto a guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                }

            //añadir al arrays de objetos 
            pelis.push(peli)

            //guardar en el localstorage
            this.storage.save(pelis)
            //actualizar listado

            }

            console.log('acabas de enviar el formulario de add', title, description)

            return false 
        }   
    }
}