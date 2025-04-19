import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoadMoreButton,
  hideLoader,
  showLoadMoreButton,
  showLoader,
} from './js/render-functions';

const searchForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

let searchQuery = '';
let page = 1;

async function onSearchFormSubmit(evt) {
  evt.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  page = 1;

  searchQuery = evt.target.elements['search-text'].value.trim();
  evt.target.reset();
  if (!searchQuery) {
    iziToast.error({
      message: 'Enter valid query',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  try {
    const { hits, totalHits } = await getImagesByQuery(searchQuery, page);

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        maxWidth: 432,
      });

      return;
    }

    createGallery(hits);

    showLoadMoreButton();
    if (Math.ceil(totalHits / 15) === page) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

async function onLoadMoreBtnClick(evt) {
  page += 1;
  hideLoadMoreButton();
  showLoader();
  try {
    const { hits, totalHits } = await getImagesByQuery(searchQuery, page);

    createGallery(hits);
    const { height } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({
      top: height * 2,

      behavior: 'smooth',
    });

    showLoadMoreButton();
    if (Math.ceil(totalHits / 15) === page) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
