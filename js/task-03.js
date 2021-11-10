const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
galleryList.style.display = 'flex';
galleryList.style.listStyle = 'none';
galleryList.style.justifyContent = 'center';

const makeImageListMarkup = image => {
  const { url, alt } = image;
  return `
  <li>
    <img
      src='${url}' 
      alt='${alt}' 
      width = '200'
    />
  </li>
  `;
};

const makeImages = images
  .map(makeImageListMarkup)
  .join('');

galleryList.insertAdjacentHTML("afterbegin", makeImages);