import { USER_LOGIN, USER_LOGOUT, USER_SIGNUP } from "./userType";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      localStorage.setItem("userToken", JSON.stringify(action.payload.token));
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };

    case USER_LOGIN:
      return { ...state, isLoggedIn: true, user: action.payload };

    case USER_LOGOUT:
      return null;

    default:
      return state;
  }
};

export default userReducer;
