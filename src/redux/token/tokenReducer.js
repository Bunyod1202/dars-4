import { TOKEN_REGISTER_ADD, TOKEN_REGISTER_REMUVE } from "./tokenTypes";

const initialState = {
  token: localStorage.getItem('token')||"",
}

export const tokenReducter = (state = initialState, action) => {

  switch (action.type) { 
    case TOKEN_REGISTER_ADD:
      return {
        ...state,
        token: state.token = action.paylod.token,
      }
      case TOKEN_REGISTER_REMUVE:
        return {
          ...state,
          token:state.token = action.paylod.token,
        }
    default:
      return state;
  }
}