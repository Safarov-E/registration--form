import React, { Component } from 'react'
import classes from './input.module.css'

class Input extends Component {
    render() {
        const {nameInput, handleChangeInputName, name, handleBlurName, errorName} = this.props;
        return (
            <>
                <label htmlFor="name">
                    {nameInput}  
                </label><input type="text" id="name" 
                                placeholder="Введите Ваше имя" 
                                className={classes.form__label_input}
                                onChange={handleChangeInputName}
                                value={name}
                                onBlur={handleBlurName} />
                {errorName ? <span>Имя введено неправильно</span> : null}
            </>
        )
    }
}
export default Input;