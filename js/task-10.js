function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function incrementSizes() {
  return 10;
}

const container = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const amountSetter = document.querySelector('input');

let nums = [];

const countDivs = (event) => {
  nums.push(...event.currentTarget.value);

  return nums;
}

let boxItem;
let boxHolder = [];
let baseWidth = 30;
let baseHeight = 30;

function createBoxes(amount) {
  nums.forEach(item => {
    baseHeight += incrementSizes();
    baseWidth += incrementSizes();
    boxItem = document.createElement('div');
    boxItem.classList.add('.item');
    boxItem.style.backgroundColor = getRandomHexColor();
    boxItem.style.width = baseWidth.toString() + 'px';
    boxItem.style.height = baseHeight.toString() + 'px';
    boxItem.textContent = item;
    boxHolder.push(boxItem);
    nums = [];
    amountSetter.value = 0;

    return container.append(...boxHolder);
  });
}

function destroyBoxes() {
  nums = [];
  amountSetter.value = 0;
  return container.replaceChildren('');
}

amountSetter.addEventListener('input', countDivs);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);