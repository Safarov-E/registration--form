import {NAME_INPUT, EMAIL_INPUT, PHONE_INPUT, LANGUAGE_SELECTION, CHECKED} from './actions/action-types'

const initialState = {
    name: '',
    email: '',
    phone: '',
    language: '',
    checked: false
}
export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case NAME_INPUT:
            return {
                ...state,
                name: action.payload
            }
        case EMAIL_INPUT:
            return {
                ...state,
                email: action.payload
            }
        case PHONE_INPUT:
            return {
                ...state,
                phone: action.payload
            }
        case LANGUAGE_SELECTION:
            return {
                ...state,
                language: action.payload
            }
        case CHECKED:
            return {
                ...state,
                checked: action.payload
            }
        default:
            return state
    }
}