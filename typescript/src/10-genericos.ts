function watchMessage<T>(parametro:T) {
    return parametro;
}
console.log(watchMessage('Hola que tal').replace('Hola', 'Saludos'))
console.log(watchMessage(12).toFixed(3))
console.log(watchMessage(true).valueOf)
