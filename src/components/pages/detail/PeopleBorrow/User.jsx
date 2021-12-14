import React, { useState, useEffect } from 'react';
import Mailto from 'react-mailto-link';

import { findUserById } from '../../../../services/api';

const User = ({ id }) => {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const response = await findUserById(id);
    setUser(response[0]);
  }, []);

  return user.name ? (
    <Mailto email={user.email} obfuscated>
      <p>{user.name}</p>
    </Mailto>
  ) : (
    <p />
  );
};

export default User;
