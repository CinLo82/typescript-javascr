let newPost = JSON.stringify({        // para poder pasarlo en el body este no puede ser un objeto, sino un string, por eso debo transformarlo
    body: "This is a new post",
    userId: 54
})

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: newPost,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        }
}) 
    .then(response => response.json())  
    .then(json => console.log(json))