import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    setCurrentUser: ['payload']
});

const INITIAL_STATE = [];

const setCurrentUser = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        currentUser: action.payload
    }
}

export default createReducer(INITIAL_STATE, {
    [Types.SET_CURRENT_USER]: setCurrentUser
});