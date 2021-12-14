import React, { useState, useEffect } from 'react';

import { findUserById } from '../../../../services/api';

const User = ({ id }) => {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const response = await findUserById(id);
    setUser(response[0]);
  }, []);

  return user.name ? <p key={user._id}>{user.name}</p> : <p />;
};

export default User;
