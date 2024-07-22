let person = {
    name: 'John',
    lastName: 'Kussak',
    adress: {
        country: 'EE UU',
        city: {
            name: 'New York',
            state: 'NY'
        }

    }
}

let findOutState = person && person.adress && person.adress.city && person.adress.city.state;
// encadenamiento opcional
let findOutState2 = person?.adress?.city?.state == undefined ? false : true

console.log(findOutState2);

