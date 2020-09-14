const defaultState = {
    user: {},
    token: null,
    // error: null,
    // profile: null
}

const auth = (state = defaultState, action) => {
    console.log('authReducer', state, action)
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                token: 1
            }

        case 'REGISTER':
            return {
                ...state,
                user: action.payload,
                token: 1
            }

        // case 'SHOW_ERROR':
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
        // case 'AFTER_LOGIN':
        //     return {
        //         ...state,
        //         user: action.payload,
        //         profile: action.payload.Profile
        // }
        default:
            return state
    }
}

export default auth;