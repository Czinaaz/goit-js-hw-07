import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemLIst = document.querySelector('.gallery');

let galleryElements = galleryItems

    .map(item =>{
        return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
        </a>
    </li>`;
    })
    .join('');

galleryItemLIst.innerHTML = galleryElements;

galleryItemLIst.addEventListener('click', imageItem);

function imageItem(imageEvent) {
    imageEvent.preventDefault();

    if (imageEvent.target.nodeName !== 'IMG'){
        return;
    }
    const largeImageURL = imageEvent.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${largeImageURL}">`);
    instance.show();

    document.addEventListener('keydown', pressEsc);
    function pressEsc(keyEvent){
        if (keyEvent.code === 'Escape'){
            instance.close();
            document.removeEventListener('keydown',pressEsc )
        }
    }

}



console.log(galleryItems);
