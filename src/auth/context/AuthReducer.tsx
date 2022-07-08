import {GET_USER_PERMISSIONS, GET_USER_PROFILE} from "../../helper/constants";

export default (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload,
      };
    case GET_USER_PERMISSIONS:
      return {
        ...state,
        permissions: payload,
      };
    default:
      return state;
  }
};

