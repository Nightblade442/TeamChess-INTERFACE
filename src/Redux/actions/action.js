import {
  SET_IMPLICIT_GRANT_CREDENTIALS,
  SET_BOARD,
  SET_SELECTED,
  SET_AUTHENTICATION_STATUS
} from "../constants/action-types";

export  function setImplicitGrantCredentials(payload) { //takes in the payload and dispatches it to the store.
    //debug("setImplicitGrantCredentials payload: %O", payload);
    return { type: SET_IMPLICIT_GRANT_CREDENTIALS, payload }
  };

export function setBoard(payload){
  return {type: SET_BOARD, payload}
}

export function setSelected(payload){
  return {type: SET_SELECTED, payload}
}
 
export function setAuthenticationStatus(payload){
  return {type: SET_AUTHENTICATION_STATUS, payload}
}