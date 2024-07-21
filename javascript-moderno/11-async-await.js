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
        console.log('Cargando Productos...')
        setTimeout(() => {
            resolve(products)
            //reject(Error('Error al cargar los productos'))
        }, 1500);
    })
}

function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cinlo')
        }, 1500);
    })
}

async function getMyProducts() {
    try {
        console.log('Cargando Información')
        let information = await Promise.all([getProducts(), getName()])
        console.log(information[0], information[1])
    } catch (error) {
        console.log(error.message )
    }
}

getMyProducts()