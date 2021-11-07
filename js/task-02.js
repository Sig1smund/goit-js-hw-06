const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector('#ingredients');

const listItems = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('.item');
  listItem.textContent = item;

  return listItem;
});

mainList.append(...listItems);
  


