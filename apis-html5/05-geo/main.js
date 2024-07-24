// comprobar si esta disponible
if (navigator.geolocation) {
    console.log('disponible')

    // conseguir posicion
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
    }, (error) => {
        console.log(error)
    })
}