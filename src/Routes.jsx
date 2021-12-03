import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/auth/Login';

const appRoutes = () => {
  const verifyLoggedUser = () => {
    const token = localStorage.getItem('token');

    return !!token;
  };

  const [isUserLogged, setIsUserLogged] = useState(verifyLoggedUser());

  const loginUser = () => {
    setIsUserLogged(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Login loginUser={loginUser} />} />
    </Routes>
  );
};

export default appRoutes;
