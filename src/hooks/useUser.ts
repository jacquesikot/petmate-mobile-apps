/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from 'react';

import storage from '../utils/storage';

const useUser = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const getUser = async () => {
      const user = await storage.getData('user');
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    void getUser();
  }, []);

  return user;
};

export default useUser;
