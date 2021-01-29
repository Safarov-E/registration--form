const initialState = {
    name: '',
    email: '',
    phone: ''
}
export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'NAME_INPUT':
            return {
                ...state,
                name: action.payload
            }
        case 'EMAIL_INPUT':
            return {
                ...state,
                email: action.payload
            }
        case 'PHONE_INPUT':
            return {
                ...state,
                phone: action.payload
            }
        default:
            return state
    }
}