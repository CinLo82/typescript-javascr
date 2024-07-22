"use strict";
let companies = {
    name: 'Microsoft',
    sector: 'informatica',
    service: ['Sistemas operativos', 'ofimatica', 'consola'],
    billing: 55000000000,
    watch() {
        return this.name + ' ' + this.sector;
    }
};
console.log(typeof companies.service, typeof companies.billing);
