import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryItemList = document.querySelector('.gallery');

// Generate HTML for each gallery item
const galleryElements = galleryItems.map(item => `
  <li>
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>
`).join('');

// Insert gallery items into the UL element
galleryItemList.innerHTML = galleryElements;

// Initialize SimpleLightbox with options
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);