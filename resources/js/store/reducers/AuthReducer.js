const initialState = {
    loggedIn: false,
    user: {}
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("REGISTER"):
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            };
        case ("LOGIN"):
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            };
        case ("LOGOUT"):
            return initialState;
        default:
            return state;
    }
}

export default AuthReducer;