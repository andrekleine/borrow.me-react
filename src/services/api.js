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
api.interceptors.response.use(
  (response) => response,
  verifyUnauthorizedError,
);

// Setting requisition's "Authorization" header w/ bearer token value
const setHeaders = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

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

// 
export const getProjects = async (searchTitle, token) => {
  const response = await api.get(`/projects?title=${searchTitle}`, setHeaders(token));

  return response.data;
};

export const getOneProject = async (projectId, token) => {
  const response = await api.get(`/projects/${projectId}`, setHeaders(token));

  return response.data;
};

export const createOneProject = async (body, token) => {
  const response = await api.post('/projects', body, setHeaders(token));

  return response.data;
};

export const createOneTask = async (projectId, body, token) => {
  const response = await api.post(`/tasks/${projectId}`, body, setHeaders(token));

  return response.data;
};