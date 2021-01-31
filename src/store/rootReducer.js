import {NAME_INPUT, EMAIL_INPUT, 
        PHONE_INPUT, LANGUAGE_SELECTION, 
        CHECKED, INPUT_CLEAR, 
        MODAL, MODAL_DESCRIPTION_OPEN,
        MODAL_DESCRIPTION_CLOSE } from './actions/action-types'

const initialState = {
    languages: [
        {id: 1, language: 'Русский'},
        {id: 2, language: 'Английский'},
        {id: 3, language: 'Китайский'},
        {id: 4, language: 'Испанский'}
    ],
    name: '',
    email: '',
    phone: '',
    language: '',
    checked: false,
    modal: false,
    termsOfUse: false
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
        case MODAL:
            return {
                ...state,
                modal: true
            }
        case INPUT_CLEAR:
            return {
                ...state,
                name: '',
                email: '',
                phone: '',
                language: '',
                checked: false,
                modal: false
            }
        case MODAL_DESCRIPTION_OPEN:
            return {
                ...state,
                termsOfUse: true
            }
        case MODAL_DESCRIPTION_CLOSE:
            return {
                ...state,
                termsOfUse: false
            }
        default:
            return state
    }
}