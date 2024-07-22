// las propiedades publicas son accesibles desde fuera de las clases, y desde cualq clase que se hereden de esta
// las propiedades privadas solo son accesibles desde la clase donde se declaran
// las propiedades protegidas son accesibles desde la clase donde se declaran y desde las que se hereden
class Car{
    constructor(
        public brand:string,
        public model:string,
        public color:string,
        public year:number,
        private started: boolean = false,
        private speed:number = 0
        ) {}

    public startUp():void{
        this.started = true
    }
    public turnOff():void{
        this.started = false
    }

    public accelerate():void{
        this.speed += 5
    }

    private watchCar(): string {
        return this.brand + ' ' + this.model
    }

    private watchQuality(): string {
        return this.year + ' ' + this.color
    }

    public watchAll(): string {
        return this.watchCar() + ' ' + this.watchQuality()
    }

    public set darColor(color:string) {
        this.color = color
    } 

    public get getColor():string {
        return this.color
    }
}

let mi_car: Car = new Car('Renault', 'Clio', 'Rojo', 2020)

console.log(mi_car.watchAll())

mi_car.startUp()
mi_car.accelerate()
mi_car.accelerate()
mi_car.accelerate()
mi_car.accelerate()
console.log(mi_car)
