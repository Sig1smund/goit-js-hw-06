function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const triggerBtn = document.querySelector('.change-color')
const spanColor = document.querySelector('.color')
const body = document.querySelector('body')

triggerBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.style.backgroundColor;
});

  
  
