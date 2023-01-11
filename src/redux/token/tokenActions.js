import { TOKEN_REGISTER_ADD, TOKEN_REGISTER_REMUVE } from "./tokenTypes"


export const TokenRegisterAdd = (token) => {

  return {
    type: TOKEN_REGISTER_ADD,
    paylod:token
  }
}
export const TokenRegisterRemuve = () => {

  return {
    type: TOKEN_REGISTER_REMUVE,
    paylod:""
  }
}