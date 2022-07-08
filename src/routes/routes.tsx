import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthProvider from "../auth/context/AuthProvider";
import App from "../components/App";
import PrivateRoute from "../auth/security/PrivateRoute";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute permission={3}><App/></PrivateRoute>}/>
          <Route path={'/login'} element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
