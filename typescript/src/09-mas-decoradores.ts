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

class Computer{

    @modmen(false)
    turnOn(mensaje: string){
        console.log('Encendiendo...');
        console.log(mensaje);
    }
}

let pc = new Computer()
pc.turnOn('Estas en la pc de cinlo')