"use strict";
//clase
class Fifa {
    constructor(title, category, years, duration, released) {
        this.title = title;
        this.category = category;
        this.years = years;
        this.duration = duration;
        this.released = released;
    }
    watch() {
        console.log(this.title, this.category, this.years);
    }
    update(consola) {
        console.log('buscando actualizaciones...');
        return `Actualización para ${consola}`;
    }
}
let fifa23 = new Fifa('Fifa 23', 'Deportes', 3, 25, true);
console.log(fifa23.watch());
// interface de objeto literal
let gta = {
    title: 'Grand Theft Auto V',
    category: 'Acción',
    years: 18,
    watch() {
        console.log(this.title, this.category, this.years);
    },
    update(consola) {
        console.log('buscando actualizaciones...');
        return `Actualización para ${consola}`;
    }
};
console.log(gta);
