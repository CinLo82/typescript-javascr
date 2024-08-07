export default class Storage{

    constructor(){
        this.id = 1

    }
    getData(){
        let pelis = JSON.parse(localStorage.getItem('pelis'));

        if(pelis.length === 0 ) {
            pelis = [
                {
                    id: 0,
                    title: 'La vida es bella',
                    description: 'Un hombre trata de hacer creer...'
                }
            ];
            this.id = 1;
        } else {
            this.id = pelis[pelis.length - 1].id + 1
        }
        return pelis
    }

    getLastId(){
        return this.id
    }

    save(data){
        localStorage.setItem('pelis', JSON.stringify(data))
    }

}