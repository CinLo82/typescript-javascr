"use strict";
// las propiedades publicas son accesibles desde fuera de las clases, y desde cualq clase que se hereden de esta
// las propiedades privadas solo son accesibles desde la clase donde se declaran
// las propiedades protegidas son accesibles desde la clase donde se declaran y desde las que se hereden
class Car {
    constructor(brand, model, color, year, started = false, speed = 0) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.started = started;
        this.speed = speed;
    }
    startUp() {
        this.started = true;
    }
    turnOff() {
        this.started = false;
    }
    accelerate() {
        this.speed += 5;
    }
    watchCar() {
        return this.brand + ' ' + this.model;
    }
    watchQuality() {
        return this.year + ' ' + this.color;
    }
    watchAll() {
        return this.watchCar() + ' ' + this.watchQuality();
    }
    set darColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
}
let mi_car = new Car('Renault', 'Clio', 'Rojo', 2020);
console.log(mi_car.watchAll());
mi_car.startUp();
mi_car.accelerate();
mi_car.accelerate();
mi_car.accelerate();
mi_car.accelerate();
console.log(mi_car);
