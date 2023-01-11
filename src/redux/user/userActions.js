import { USER_REGISTER_ADD, USER_REGISTER_REMUVE } from "./userTypes"


export const UserRegisterAdd = (user) => {

  return {
    type: USER_REGISTER_ADD,
    paylod:user
  }
}
export const UserRegisterRemuve = () => {

  return {
    type: USER_REGISTER_REMUVE,
    paylod:""
  }
}