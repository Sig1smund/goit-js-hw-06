let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const counter = document.getElementById('value');


const onIncrementButtonClick = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}

const onDecrementButtonClick = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}

decrement.addEventListener('click', onDecrementButtonClick);
increment.addEventListener('click', onIncrementButtonClick);