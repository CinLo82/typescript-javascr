// objetos en ts
type companies = {
    name: string,
    sector: string,
    service: string[],
    billing: number,
    watch: () => string
}

let companies = {
    name: 'Microsoft',
    sector: 'informatica', 
    service: ['Sistemas operativos','ofimatica', 'consola'],
    billing: 55_000_000_000,
    watch(){
        return this.name + ' ' + this.sector
    }
}

console.log(typeof companies.service, typeof companies.billing)

