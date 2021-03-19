const initialState = {
    login: {
        message: '',
        errors: {}
    },
    register: {
        message: '',
        errors: {}
    }
}

const AlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SHOW_LOGIN_ALERT"):
            return {
                ...state,
                login: {
                    message: action.payload.message,
                    errors: action.payload.errors,
                }
            };
        case ("HIDE_LOGIN_ALERT"):
            return {
                ...state,
                login: {
                    message: '',
                    errors: {}
                }
            };
        case ("SHOW_REGISTER_ALERT"):
            return {
                ...state,
                register: {
                    message: action.payload.message,
                    errors: action.payload.errors,
                }
            }
        case ("HIDE_REGISTER_ALERT"):
            return {
                ...state,
                register: {
                    message: '',
                    errors: {}
                }
            }
        default:
            return state;
    }
}

export default AlertReducer;