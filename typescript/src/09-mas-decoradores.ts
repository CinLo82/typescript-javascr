function modmen(watch:boolean) {
    return function info(target: Object, propertyKey: string, descriptor:any){
        if(watch){
            console.log(target)
            console.log(propertyKey)
            console.log(descriptor)
        } else {
            descriptor.value = function (){
                console.log('Metodo bloqueado!!')
            }
        }
}
}

function my_property(target: Object, propertyKey:string, parameterIndex: number){
    console.log('Esta propiedad esta en la clase ' + target.constructor.name + ' y la posición del parámetro es ' + parameterIndex )
}

class Computer{

    marca:string = 'Asus'

    @modmen(false)
    turnOn(@my_property mensaje: string){
        console.log('Encendiendo...');
        console.log(mensaje);
    }
}

let pc = new Computer()
pc.turnOn('Estas en la pc de cinlo')