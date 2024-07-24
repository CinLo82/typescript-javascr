// demostarr compatibilidad
if(Notification == 'undefined'){
    console.log('tu navegador no es compatible')
} else{
    console.log('tu navegador es compatible', Notification)
    
    // pedir permiso
    if(Notification !== 'granted'){
        Notification.requestPermission()
    }
    console.log(Notification.permission)

    // crear notificacion
    let principal = 'Hola soy una notificación'
    let opciones = {
        body: 'Hola soy el cuerpo de la notificación',
        icon: 'https://www.arsys.es/blog/wp-content/uploads/2018/05/que-es-un-hosting.jpg'
    }
    let notificacion = new Notification(principal, opciones)

    // evento click
    notificacion.onclick = function(){
        window.open('https://www.arsys.es/blog/wp-content/uploads/2018/05/que-es-un-hosting.jpg')
    }

    // onclose
    notificacion.onclose = () => {
        alert('Upss! que pena tenia un regalo para ti')
    }

    // tiempo de notificacion
    setTimeout(() => {
        notificacion.close()
    }, 5000)

}

