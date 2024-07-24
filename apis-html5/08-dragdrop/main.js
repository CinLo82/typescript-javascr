const tomates = document.querySelectorAll('.tomato')
const huerto = document.querySelector('#huerto')

tomates.forEach((tomate, indice) => {
    tomate.addEventListener('dragstart', () =>{
        console.log('Estas moviendo el tomate ' + parseInt(indice+1))
    })
    // drag
    tomate.addEventListener('drag', () =>{
        console.log('Estas arrastrando el tomate ' + parseInt(indice+1))
    })
    // dragend
    tomate.addEventListener('dragend', () =>{
        console.log('Estas moviendo el tomate ' + parseInt(indice+1))
    })
})

//drop
huerto.addEventListener('drop', (e) => {
    e.preventDefault()
    console.log('Tomate plantado')
})


//dragover
huerto.addEventListener('dragover', (e) => {    
    e.preventDefault()
    console.log('Estoy sobre el huerto')
})

//dragleave
huerto.addEventListener('dragleave', () => {
    console.log('Saliendo del huerto')
})
