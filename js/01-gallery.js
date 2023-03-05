import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')

galleryContainer.insertAdjacentHTML('beforeend',createGallery(galleryItems) )
galleryContainer.addEventListener('click',stopDefAction)

function createGallery(evt) {
    return evt.map(({preview, original, description}) => {
        return`
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    }).join('')
}

function stopDefAction(evt) {
  evt.preventDefault();

  if(evt.target.nodeName !=='IMG'){
    return
  }

  const modalImg = evt.target.dataset.source

  const instance = basicLightbox.create(
    `<img src="${modalImg}"
    width="800" height="600">`
  )
  instance.show()
  window.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        instance.close();
    }
})
}


