import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';

import ProtectedRoute from './components/misc/ProtectedRoute';

import Home from './components/pages/home/Home';
import Search from './components/pages/search/Search';
import Detail from './components/pages/detail/Detail';

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
      <Route path="/register" element={<Register />} />

      <Route
        path="/books"
        element={<ProtectedRoute isLogged={isUserLogged} Page={Home} />}
      />
      <Route
        path="/books/:googleId"
        element={<ProtectedRoute isLogged={isUserLogged} Page={Detail} />}
      />
      <Route
        path="/search"
        element={<ProtectedRoute isLogged={isUserLogged} Page={Search} />}
      />
      <Route
        path="/search/:googleId"
        element={<ProtectedRoute isLogged={isUserLogged} Page={Detail} />}
      />
    </Routes>
  );
};

export default appRoutes;
