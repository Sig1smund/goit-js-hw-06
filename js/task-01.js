
const listArr = document.querySelectorAll('.item');
const catCounter = (array) => {
    return array.length;
}
console.log('Number of categories: ', catCounter(listArr));


listArr.forEach(item => {
  const titleName = item.querySelector('h2');
  const elements = item.querySelectorAll('ul li');
  console.log(
    `Category: ${titleName.textContent}\r\nElements: ${elements.length}`,
  );
});