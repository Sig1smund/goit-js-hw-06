function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const container = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const amountSetter = document.querySelector('input');

const nums = [];

const countDivs = (event) => {
  nums.push(...event.currentTarget.value);

  return nums;
}

amountSetter.addEventListener('input', countDivs)

createBtn.addEventListener('click', createBoxes(nums));
// destroyBtn.addEventListener('click');


function createBoxes(amount) {
  let baseWidth = '10px';
  let baseHeight = '10px'
  nums.forEach(item => {
    container.insertAdjacentHTML(
      'afterbegin', `<div width='${baseWidth}' height='${baseHeight}'></div>`
    )
  });
}