import {
    SET_IMPLICIT_GRANT_CREDENTIALS,
    SET_BOARD,
    SET_SELECTED,
    SET_AUTHENTICATION_STATUS,
    SET_PAGE,
    SET_AUTHENTICATION_CREDENTIALS,
    JOIN_GAME
} from "../constants/action-types";
import * as moment from 'moment';



function appReducer(state, action) {
    //tell redux how to deal with data in each action case. one for each action.
    let newstate = null;
    if (action.type === SET_IMPLICIT_GRANT_CREDENTIALS) { //after getting access token 
        newstate = {
            ...state,
            loggedIn: true,
            loginErrorMessage: null,
            access_token: action.payload.access_token,
            implicitGrantExpiry: moment().add(86398, 'seconds'),
        };
    }
    else if (action.type === SET_BOARD) {
        newstate = {
            ...state,
            ...action.payload,
        }
    }
    else if(action.type === SET_AUTHENTICATION_STATUS){
         newstate = {
             ...state,
             ...action.payload
         }
    }
    else if(action.type === SET_PAGE){
        newstate = {
            ...state,
            ...action.payload
        }
    }
    else if(action.type === SET_AUTHENTICATION_CREDENTIALS){
        newstate = {
            ...state,
            loggedIn : true,
            page: "MAIN",
            token: action.payload.token,
            username: action.payload.username,
        }
    }
    else if(action.type === JOIN_GAME){
        newstate = {
            ...state,
            gameId : action.payload.gameId,
            playerId: action.payload.playerId,
            updater: action.payload.updater
        }
    }
    else {
        newstate = { ...state };
    }

    return newstate;
}

export default appReducer;