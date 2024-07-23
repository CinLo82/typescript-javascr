//comprobar si el navegador es compatible con local storage
if (typeof(Storage) !== "undefined") { 
    console.log("Local storage disponible");
}
else {
    console.log("Local storage no disponible");
}
// almacenar datos
sessionStorage.setItem("nombre1", "Cinlo Losada");
sessionStorage.setItem("sitio", "CinlLosada@cinlo.com");

//sacar datos
//alert(sessionStorage.getItem('sitio'))

// se usa igual q localstorage, solo que los datos no persisten en el navegador, ya que al cerrarlo se desaparecen, en cambio en local storage si persisten al cerrar y volver a abrir el navegador.