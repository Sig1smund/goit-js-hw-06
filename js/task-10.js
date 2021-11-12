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
let boxItem =[];
let boxHolder = [];
let baseWidth = 30;
let baseHeight = 30;

customizeContainer(container);

const countDivs = (event) => {
  nums.push(...event.currentTarget.value);

  return nums;
}

function createBoxes(amount) {
  nums.forEach(item => {
    baseHeight += incrementSizes();
    baseWidth += incrementSizes();
    boxItem = document.createElement('div');
    boxItem.classList.add('.item');
    customizeBox(boxItem);
    boxHolder.push(boxItem);
    nums = [];
    amountSetter.value = 0;

    container.append(...boxHolder);

    return boxHolder = [];
  });
}

function customizeBox(obj) {
    obj.style.backgroundColor = getRandomHexColor();
    obj.style.width = baseWidth.toString() + 'px';
    obj.style.height = baseHeight.toString() + 'px';
}

function customizeContainer(div) {
  div.style.display = 'flex';
  div.style.flexWrap = 'wrap';
  div.style.justifyContent = 'space-between'
  div.style.flexDirection = 'column-reverse';
}

function destroyBoxes() {
  nums = [];
  boxHolder = [];
  amountSetter.value = 0;
  container.innerHTML = '';
  baseHeight = 30;
  baseWidth = 30;
}

amountSetter.addEventListener('input', countDivs);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);