let people: string[] = ['Cinlo', 'Nadia', 'Lucia'];

people.push('Carla')



let years: number[] = [2000, 2002, 2004]
years.push(2025)

console.log(people, years)

//tuplas => en este caso solo me permite q mi array tenga 3 elementos, y cada uno en su orden
let movie: [string, boolean, number, ] = ['Batman Begins', true, 1990]

console.log(typeof movie)

// Enum - enumeracion sirve para definir una serie de clases, y mantener esos elementos fijos, ya que no podran ser modificados. es como si fuera una constante solo de lectura
enum personalInfo {
    name = 'cinlo',
    age = 20,
    country = 'Argentina',
    city = 'Buenos Aires'
}

console.log(typeof personalInfo, personalInfo.name)

// cast -> convertir a otro tipo de dato
let text_unknow: any = 'Esto viene en una petición' 
let str: string = text_unknow
let text_unknow2: any = '51278328'
let str2: string = <string>text_unknow2

console.log(typeof str, str)
console.log(typeof str2, str2)
