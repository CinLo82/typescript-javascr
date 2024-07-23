"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function toProyect(metadatos) {
    return (constructor) => {
        constructor.prototype.makeProjection = function () {
            if (metadatos.activar) {
                console.log('proyectando la pelicula', this.title);
            }
            else {
                console.log('Cine cerrado');
            }
        };
        constructor.prototype.addSelection = function () {
            let movies = metadatos.selection;
            movies.push(this.title);
            return movies;
        };
    };
}
let Movie = class Movie {
    constructor(title, gender, projecting) {
        this.title = title;
        this.gender = gender;
        this.projecting = projecting;
    }
};
Movie = __decorate([
    toProyect({
        activar: true,
        selection: ['Superman', 'El gran torino', 'Spiderman']
    }),
    __metadata("design:paramtypes", [String, String, Boolean])
], Movie);
let batman = new Movie('Batman Begins', 'Accion', false);
batman.makeProjection(); // proyectando la pelicula
console.log(batman.addSelection());
