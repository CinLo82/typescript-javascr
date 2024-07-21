let box = document.querySelector('#container')
box.innerHTML = 'Cargando...'

//petición ajax moderna
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(items => {
    console.log(items)
    box.innerHTML = ''
    watch(items)
})
.catch(error => console.log(error.message))

//DOM
function watch(items) {

    items.forEach(item => {
        let watchMe = `
            <article>
                <h2>${item.title}</h2>
                <p>${item.body}</p>

            </article>
            <hr/>
        `;
        box.innerHTML += watchMe

    })
    return items
}