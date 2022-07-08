import React from "react";
import {isLoggedIn, usePermissions} from "../../api/services/AuthServices";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Check permission for user.
 *
 * @param children
 * @param props
 * @constructor
 */
const PrivateRoute = ({children, ...props}) => {
  const {permission} = props;
  const permissions = usePermissions();
  const checkPermission = permissions.find(item => item === permission);

  if (!isLoggedIn()) {
    return <Navigate to="/login"/>;
  } else if (permissions.length > 0 && !checkPermission) {
    return <Navigate to="/403"/>;
  }
  return children;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  permission: PropTypes.number.isRequired,
}
