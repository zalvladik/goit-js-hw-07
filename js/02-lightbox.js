import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
galleryContainer.insertAdjacentHTML('beforeend',createGallery(galleryItems) )
galleryContainer.addEventListener('click',stopDefAction)

function createGallery(evt) {
    return evt.map(({preview, original, description}) => {
        return`
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" /> </a> 
        `
    }).join('')
}

function stopDefAction(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return console.log('missClick')
    };
    var lightbox = new SimpleLightbox('.gallery a', 
    {captions: true, 
     captionDelay: 250 , 
     captionsData : 'alt', 
    });
}