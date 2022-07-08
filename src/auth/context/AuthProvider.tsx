import React, {useEffect, useReducer} from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {http} from "../../api/axios/axiosInstance";
import {getUserId, isLoggedIn} from "../../api/services/AuthServices";
import {GET_USER_PERMISSIONS, GET_USER_PROFILE} from "../../helper/constants";

/**
 * Auth Provider
 *
 * @param children
 * @constructor
 */
const AuthProvider = ({children}) => {
  const initialState = {
    auth: {},
    permissions: [],
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const getInitialData = async () => {
    await http.get(`/users/${getUserId()}`).then(response => {
      dispatch({
        type: GET_USER_PROFILE,
        payload: response.data.auth,
      });

      dispatch({
        type: GET_USER_PERMISSIONS,
        payload: response.data.permissions,
      });
    })
  }

  /**
   * Get user profile information.
   */
  const getUserProfile = async () => {
    await http.get(`/users/${getUserId()}/profile`).then(response => {
      dispatch({
        type: GET_USER_PROFILE,
        payload: response.data.auth,
      });
    })
  }

  /**
   * Get user permissions.
   */
  const getPermissions = async () => {
    await http.get(`/users/${getUserId()}/permissions"`).then(response => {
      dispatch({
        type: GET_USER_PERMISSIONS,
        payload: response.data.permissions,
      });
    })
  }

  useEffect(() => {
    if (isLoggedIn()) {
      getInitialData().then(r => {
        console.table(r);
      }).catch(e => e);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth: state.user,
        permissions: state.permissions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
