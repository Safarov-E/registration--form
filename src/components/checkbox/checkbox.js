import React, { Component } from 'react'

class Checkbox extends Component {
    render() {
        const {checked, handleCheckbox} = this.props;
        return (
            <div className="from__checkbox">
                <label>
                    <input type="checkbox" checked={checked} className="checkbox" onChange={handleCheckbox} />
                    <span className="fake"></span>
                </label>
                <p>Принимаю <a href="/">условия</a> использования</p>
            </div>
        )
    }
}
export default Checkbox;