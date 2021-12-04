import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';

// import MyProjects from './components/pages/MyProjects/MyProjects';
// import ProjectDetails from './components/pages/ProjectDetails/ProjectDetails';

// import ProtectedRoute from './components/miscelaneous/ProtectedRoute/ProtectedRoute';

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
    </Routes>
  );
};

export default appRoutes;
