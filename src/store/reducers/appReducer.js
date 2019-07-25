import {
    TOGGLE_FULLSCREEN,
    TOGGLE_USER_STATUS,
    SEND_USER_EMAIL,
    SEND_LOCATION
} from "../types";

const initialState = {
    fullscreen: 0,
    loggedIn: 0,
    email: "",
    id: "",
    location: "Home"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FULLSCREEN:
            if (state.fullscreen === 1) {
                return {
                    ...state,
                    fullscreen: 0
                };
            } else {
                return {
                    ...state,
                    fullscreen: 1
                };
            }
        case TOGGLE_USER_STATUS:
            if (state.loggedIn === 1) {
                return {
                    ...state,
                    loggedIn: 0
                };
            } else {
                return {
                    ...state,
                    loggedIn: 1
                };
            }

        case SEND_USER_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case SEND_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        default:
            return initialState;
    }
};
