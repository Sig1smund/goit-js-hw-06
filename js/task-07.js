const progressBar = document.getElementById('font-size-control');
progressBar.setAttribute('value', 16);
const textContainer = document.getElementById('text');

let sizeValue = 0;

progressBar.addEventListener('input', (event) => {
    sizeValue = event.currentTarget.value;
    textContainer.style.fontSize = (sizeValue.toString() + 'px');
});