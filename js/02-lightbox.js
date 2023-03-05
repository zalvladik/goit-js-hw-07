import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')

galleryContainer.insertAdjacentHTML('beforeend',createGallery(galleryItems) )
galleryContainer.addEventListener('click',stopDefAction)

function createGallery(evt) {
    return evt.map(({preview, original, description}) => {
        return`
    <div class="gallery__item">
        <a class="gallery__link" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" 
        />
    </a> 
</div>
        `
    }).join('')
}


function stopDefAction(evt) {
    evt.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', {
        
      });
      lightbox.show()
}

