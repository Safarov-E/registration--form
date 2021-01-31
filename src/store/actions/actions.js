import {NAME_INPUT, EMAIL_INPUT, 
        PHONE_INPUT, LANGUAGE_SELECTION, 
        CHECKED, INPUT_CLEAR, 
        MODAL, MODAL_DESCRIPTION_OPEN,
        MODAL_DESCRIPTION_CLOSE } from './action-types' 

export function inputName(name) {
    return {
        type: NAME_INPUT, 
        payload: name
    }
}
export function inputEmail(email) {
    return {
        type: EMAIL_INPUT, 
        payload: email
    }
}
export function inputPhone(phone) {
    return {
        type: PHONE_INPUT, 
        payload: phone
    }
}
export function languageSelection(language) {
    return {
        type: LANGUAGE_SELECTION, 
        payload: language
    }
}
export function onChecked(checked) {
    return {
        type: CHECKED, 
        payload: checked
    }
}
export function onInputClear() {
    return {
        type: INPUT_CLEAR
    }
}
export function onModal() {
    return {
        type: MODAL
    }
}
export function onModalDescriptionOpen() {
    return {
        type: MODAL_DESCRIPTION_OPEN
    }
}
export function onModalDescriptionClose() {
    return {
        type: MODAL_DESCRIPTION_CLOSE
    }
}