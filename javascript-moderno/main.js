//string clasicos
let name1 = 'Juan';
let lastName = 'Perez';
let profession = 'desarrollador web';

let nya = name1 + ' ' + lastName + '\n' + profession
console.log(nya);

//Templete string
let templete = `${name1} ${lastName}
${profession}`
console.log(templete);

function sheet(name1, lastName, profession){
    let dataSheet = `
    <div class='sheet'>
        <h2>${name1} ${lastName}</h2>
        <p>${profession}</p>
        <p>forma parte del equipo de cinloweb.es</p>
    </div> 
    `;
    return dataSheet;
}

let boxSheet = document.createElement('section');


boxSheet.innerHTML = sheet('Cinlo', 'Losada', 'Desarrolladora frontend');
boxSheet.innerHTML += sheet('Juan', 'Perez', 'Desarrollador backend');
boxSheet.innerHTML += sheet('Lucia', 'Garcia', 'Desarrolladora fullstack');

document.querySelector('#container').appendChild(boxSheet)