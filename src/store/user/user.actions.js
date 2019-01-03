import { createAction } from "redux-actions";

export const UserActionsType = {
  REGISTER_USER: 'REGISTER_USER',
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
};

export const UserAction = {
  registerUser: createAction(UserActionsType.REGISTER_USER),
  loginUser: createAction(UserActionsType.LOGIN_USER),
  logoutUser: createAction(UserActionsType.LOGOUT_USER),
}
