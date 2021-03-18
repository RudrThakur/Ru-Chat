const initialState = {
    visibility: false,
    message: '',
    errors: {}
}

const AlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SHOW_ALERT"):
            return {
                ...state,
                visibility: true,
                message: action.payload.message,
                errors: action.payload.errors
            };
        case ("HIDE_ALERT"):
            return initialState;
        default:
            return state;
    }
}

export default AlertReducer;