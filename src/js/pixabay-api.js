import axios from 'axios';

const API_KEY = '49762911-ec3b435e9780d83fd842f10c5';

const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });

  const { data } = await axios(BASE_URL, { params });
  return data;
}
