import axios from 'axios';

const googleBooks = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});

export const getGoogleBooks = async (title, author) => {
  const intitle = title ? `intitle:${title}+` : '';
  const inauthor = author ? `inauthor:${author}` : '';
  const maxResults = '&maxResults=40';
  const response = await googleBooks.get(intitle + inauthor + maxResults);
  return response.data.items;
};

export const getOneGoogleBook = async (bookId) => {
  const response = await googleBooks.get(bookId);
  return response.data.items[0];
};
