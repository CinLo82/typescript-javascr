const hortalizas = document.querySelectorAll('#cesta > div')
const huerto = document.querySelector('#huerto')
const cesta = document.querySelector('#cesta')

hortalizas.forEach((hortaliza, indice) => {

    //asignar id a elemento
    hortaliza.setAttribute('id', 'hortaliza'+indice)

    hortaliza.addEventListener('dragstart', (e) =>{
    // compartir info del elemento q muevo
    e.dataTransfer.setData('text', e.target.id)

    })  
})

//dragover
huerto.addEventListener('dragover', (e) => {    
    e.preventDefault()

})

//drop
huerto.addEventListener('drop', (e) => {
    e.preventDefault()
    //recibir la informacion y soltar el elemnto en la zona
    let hortaliza = e.dataTransfer.getData('text')
    e.target.appendChild(document.getElementById(hortaliza))

    console.log('Haz plantado la hortaliza: ' + hortaliza)
})

cesta.addEventListener('dragover', (e) => {    
    e.preventDefault()

})

//drop
cesta.addEventListener('drop', (e) => {
    e.preventDefault()
    //recibir la informacion y soltar el elemnto en la zona
    let hortaliza = e.dataTransfer.getData('text')
    e.target.appendChild(document.getElementById(hortaliza))

    console.log('Haz recogido la hortaliza: ' + hortaliza)
})