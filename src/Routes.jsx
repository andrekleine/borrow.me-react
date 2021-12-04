import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';

import ProtectedRoute from './components/misc/ProtectedRoute';

import Home from './components/pages/home/Home';

// import MyProjects from './components/pages/MyProjects/MyProjects';
// import ProjectDetails from './components/pages/ProjectDetails/ProjectDetails';

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
    </Routes>
  );
};

export default appRoutes;
