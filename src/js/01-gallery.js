// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const listGalleryEl = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}">
            <img 
                class="gallery__image"
                src="${image.preview}"
                alt="${image.description}"
            />
        </a>
    `
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', listGalleryEl);

let lightBox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: '250',
});

console.log(galleryItems);
