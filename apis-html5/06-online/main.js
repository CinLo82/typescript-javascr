let online = document.querySelector('.online');
let offline = document.querySelector('.offline');

function displayDiv(){
    online.style.display = 'none';
    offline.style.display = 'none';

    return true
}
displayDiv()

window.addEventListener('online', () => {
    online.style.display = 'block';
    offline.style.display = 'none';

    setTimeout(() => {
        displayDiv()
    }, 10000)
});

window.addEventListener('offline', () => {
    offline.style.display = 'block';
    online.style.display = 'none';

    setTimeout(() => {
        displayDiv()
    }, 10000)
});
