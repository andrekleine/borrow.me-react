import axios from 'axios';

const googleBooks = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});

const getGoogleBooks = async (title, author) => {
  const intitle = title ? `intitle:${title}+` : '';
  const inauthor = author ? `inauthor:${author}` : '';
  const response = await googleBooks.get(intitle + inauthor);
  return response.data.items;
};

export default getGoogleBooks;
