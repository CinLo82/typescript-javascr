

const old_gadgets = {
    seis: 'radiocasette',
    siete: 'desktop phone',
    ocho: 'compac disc',
}

const gadgets = new Map(Object.entries(old_gadgets))

gadgets.set(1, 'PC')
        .set(2, 'TV')
        .set(3, 'TABLET')
        .set('cuatro', 'Lapto')
        .set('cinco', 'MOvil')

console.log(gadgets)
console.log(gadgets.get('seis'))
console.log(gadgets.has('TV')) // metodo has evalua las claves, no los valores, por eso en este caso nos dara false
