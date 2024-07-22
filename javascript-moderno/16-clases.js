//Molde; puedo crear opbjetos muy similares entre si, pero con valores distintos 
class Car{
    ndoor = 4; //prop publica, se puede acceder 
    #ndoor2 = 2;  // prop privada, solo se puede acceder desde una propiedad
    _nplazas = 5; // prop protegida, puedo acceder dentro de las clases, y de las propiedades que hereden esta clase
    constructor( // metodo q se ejecuta primero
        brand = 'Mercedes', 
        model = 'Clase A',
        color = 'Blanco',
        speed = 0,
        year = 2020,

    ){
        this.brand = brand,
        this.model = model;
        this.color = color;
        this.speed = speed;
        this.year = year;
    }

    //metodos / acciones a las funcionalidades del objeto
    accelerate(){
        this.speed += 1;
        }

    brake(){
        this.speed -= 1;
        }

    //Metodos set y get
    set saveBrand(brand) {
        this.brand = brand;
    }

    get returnBrand() {
        return this.brand;
    }

    //metodo estatico, se puede llamar sin necesidad de instanciuar un objeto.
    static hello(name) {
        return 'Hola' + name
    }

    get ndoor2() {
        return this.#ndoor2;
    }

    get numplazas() {
        return this._nplazas;
    }
}
//Creo un objeto de la clase Car

let mi_car = new Car('Audi', 'C4', 'Rojo', 100, 2020)
mi_car.accelerate();
mi_car.accelerate();
mi_car.accelerate();
mi_car.accelerate();
mi_car.accelerate();
mi_car.accelerate();
mi_car.brake();
mi_car.brake();
mi_car.brake();

mi_car.saveBrand = 'jeep';
console.log(mi_car.returnBrand);

console.log(mi_car.brand, mi_car.model, mi_car.speed + 'km/hs', mi_car.year);

console.log(Car.hello(' Cinlo'))

console.log(mi_car.ndoor)
console.log(mi_car.ndoor2)
console.log(mi_car.numplazas)

//Herencia => 
class Quad extends Car {
    constructor(
        brand, 
        model, 
        color, 
        speed, 
        year, 
        cilindrada){
        super(         // el emtodo super me permite tener disponible todas las prop del padre, se hace la inicializacion de las prop de la clase padre
            brand, 
            model, 
            color, 
            speed, 
            year
        )
        this.cilindros = cilindrada;
    }

}

let miQuad = new Quad('Suzuki', 'vitara', 'red', 200, 2030, 70)
miQuad.accelerate()
miQuad.accelerate()
miQuad.accelerate()
miQuad.accelerate()


console.log(miQuad)