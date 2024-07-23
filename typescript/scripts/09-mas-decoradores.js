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
function modmen(watch) {
    return function info(target, propertyKey, descriptor) {
        if (watch) {
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        }
        else {
            descriptor.value = function () {
                console.log('Metodo bloqueado!!');
            };
        }
    };
}
class Computer {
    turnOn(mensaje) {
        console.log('Encendiendo...');
        console.log(mensaje);
    }
}
__decorate([
    modmen(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Computer.prototype, "turnOn", null);
let pc = new Computer();
pc.turnOn('Estas en la pc de cinlo');
