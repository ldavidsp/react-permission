import React, {createContext} from 'react';

const AuthContext = createContext({
  auth: {},
  permissions: [],
});

export default AuthContext;
