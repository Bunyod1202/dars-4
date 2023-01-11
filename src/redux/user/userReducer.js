import { USER_REGISTER_ADD, USER_REGISTER_REMUVE } from "./userTypes";

const initialState = {
  user:JSON.parse( localStorage.getItem('user'))||"",
}

export const userReducter = (state = initialState, action) => {

  switch (action.type) {
    case USER_REGISTER_ADD:
      return {
        ...state,
        user: state.user = action.paylod.user,
      }
    case USER_REGISTER_REMUVE:
      return {
        ...state,
        user: state.user = action.paylod.user,
      }
    default:
      return state;
  }
}