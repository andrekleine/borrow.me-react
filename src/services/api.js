import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

const verifyUnauthorizedError = (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    // Reload page
    window.location.href = '/';
  }
  return Promise.reject(error);
};

// Any requests made by axios are gonna pass, first, by this interceptor
api.interceptors.response.use((response) => response, verifyUnauthorizedError);

// Setting requisition's "Authorization" header w/ bearer token value
const setHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// login/POST
export const login = async (formData) => {
  const response = await api.post('/auth/login', formData);

  return response.data;
};

// register/POST
export const register = async (formData) => {
  const response = await api.post('/auth/register', formData);

  return response.data;
};

// Home
export const home = async (token) => {
  const response = await api.get('/books', setHeaders(token));

  return response.data;
};

// Search one book in collection Books
export const getOneBook = async (googleId, token) => {
  const response = await api.get(`/books/${googleId}`, setHeaders(token));

  return response.data;
};

// Add one book to users' collection
export const addOneBook = async (body, token, googleID) => {
  const response = await api.post(
    `/books/${googleID}`,
    body,
    setHeaders(token),
  );

  return response.data;
};

// Change one book's lendable status
export const changeOneBook = async (body, token, bookId) => {
  const response = await api.put(`/books/${bookId}`, body, setHeaders(token));

  return response.data;
};

// Delete one book from user's collection
export const deleteOneBook = async (bookId, token) => {
  const response = await api.delete(`/books/${bookId}`, setHeaders(token));

  return response.data;
};

// Search user's review for one particular book
export const getOneReview = async (googleId, token) => {
  const response = await api.get(`/reviews/${googleId}`, setHeaders(token));

  return response.data;
};

// Add one review
export const addOneReview = async (body, token, googleID) => {
  const response = await api.post(
    `/reviews/${googleID}`,
    body,
    setHeaders(token),
  );

  return response.data;
};

// Delete one review
export const deleteOneReview = async (reviewId, token) => {
  const response = await api.delete(`/reviews/${reviewId}`, setHeaders(token));

  return response.data;
};
