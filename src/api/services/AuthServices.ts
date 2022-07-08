import * as jose from 'jose'
import {useContext} from "react";
import AuthContext from "../../auth/context/AuthContext";

/**
 * Login
 */
export const login = (credentials: object) => {
  // code...
}

/**
 * Set session
 */
export const setSession = (userId, authToken) => {
  localStorage.setItem('userId', window.btoa(userId));
  localStorage.setItem('authToken', window.btoa(authToken));
}
/**
 * Destroy session
 */
export const destroySession = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('authToken');
}

/**
 * Get user auth
 */
export const useAuth = () => {
  const authContext = useContext(AuthContext)
  return authContext.auth
}

/**
 * Get permissions
 */
export const usePermissions = () => {
  const authContext = useContext(AuthContext)
  return authContext.permissions
}

/**
 * Get userId
 */
export const isLoggedIn = () => {
  return !!localStorage.getItem('authToken');
}

/**
 * Get userId
 */
export const getUserId = () => {
  const userId = localStorage.getItem('userId');
  return window.atob(userId!);
}

/**
 * Get Token
 */
export const getToken = () => {
  const authToken = localStorage.getItem('authToken');
  return window.atob(authToken!);
}
