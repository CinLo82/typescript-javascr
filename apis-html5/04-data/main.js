let lista = document.querySelectorAll('#lista li')

lista.forEach(Element => {
    let cont = Element.dataset.continente;
    Element.innerHTML +=  ' | ' + cont

    if(cont == 'America'){
        Element.style.color = 'blue'
    } else if(cont == 'Asia'){
        Element.style.color = 'red'
        
    } else if(cont == 'Europa'){
        Element.style.color = 'yellow'
    } else {
        Element.style.color = 'green'
    }
})