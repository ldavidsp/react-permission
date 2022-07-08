import React from "react";
import {usePermissions} from "../../api/services/AuthServices";

/**
 * Check permission for user.
 *
 * @param children
 * @param props
 * @constructor
 */
const CanYou = ({children, ...props}) => {
  const {permission} = props;
  const permissions = usePermissions();
  const checkPermission = permissions.find(item => item === permission);
  return checkPermission ? children : '';
}

export default CanYou;


