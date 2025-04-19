import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightBox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 350,
  captionPosition: 'outside',
});

export function createGallery(images) {}

export function clearGallery() {}

export function showLoader() {}

export function hideLoader() { }

export showLoadMoreButton(){ }

export hideLoadMoreButton(){}
