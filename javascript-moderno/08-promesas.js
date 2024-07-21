let products = [
    {
        name: 'Ordenador Gaming',
        price: 1000,
        marca: 'Asus' 
    },
    {
        name: 'Tablet',
        price: 300,
        marca: 'Samsung' 
    },
    {
        name: 'Camara reflex',
        price: 650,
        marca: 'Canon' 
    }
];

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
            }, 500);
    })
}

function productBought(name) {
    return new Promise((resolve, reject) => {
        console.log('Haciendo la compra')
        setTimeout(() => {
            resolve({
                product: name,
                client: 'Cinlo Losada'
            });
        }, 3000);
    })
}

function processSale(bought){
    console.log('Producto comprado: ', bought)

    products = products.filter(product => {
        return product.name !== bought.product
    })
    return products
}


getProducts()
    .then(items =>  {
        console.log('Productos disponibles: ', items)
        return productBought('Ordenador Gaming')
    })
    .then(bought => {
        processSale(bought)
        return productBought('Tablet')
    })
    .then(bought => {
        processSale(bought)
        return productBought('Camara reflex')
    })
    .then(bought => {
        processSale(bought)
    })
    .catch(error => {
        console.log('Error: ', error)
        })
    .finally((items) => {
        if(products.length > 0) {
            console.log('Productos disponibles', products)
        } else {
            console.log('No hay productos disponibles')
        }
        console.log('Promesa Finalizada=!!')
    })

//forma corta de encadenar promesas
Promise.all([getProducts(), productBought('Ordenador Gaming'), productBought('Tablet')])
    .then(bought => console.log(bought))



// Si no llega al respuesta de mi petición
function getProducts2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(products);
            reject(Error('A ocurrido un Error'));
            }, 500);
    })
}

getProducts2()
    .then(items => console.log(items))
    .catch(error => console.log(error.message))
    .finally(() => console.log('Promesa finalizada'))
    


