import React, { Component } from 'react'

class Input extends Component {
    render() {
        const {nameInput, handleChange, value, errorName, errorInpName, errorMessage, htmlFor, placeholder} = this.props;
        return (
            <>
                <label htmlFor={htmlFor}>
                    {nameInput}  
                </label><input type="text" id={htmlFor}
                    placeholder={placeholder} 
                    className="form__label_input"
                    onChange={handleChange}
                    value={value} />
                {!errorName && !errorInpName  ? <span>{errorMessage}</span> : null}
            </>
        )
    }
}
export default Input;