const progressBar = document.getElementById('font-size-control');
const textContainer = document.getElementById('text');

let sizeValue = 0;

progressBar.addEventListener('input', (event) => {
    sizeValue += event.currentTarget.value /10;
    textContainer.style.fontSize = (sizeValue + 'px');
});