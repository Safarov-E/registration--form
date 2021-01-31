import React, { Component } from 'react'
import {connect} from 'react-redux'

class Checkbox extends Component {
    render() {
        const {checked, handleCheckbox} = this.props;
        return (
            <div className="from__checkbox">
                <label>
                    <input type="checkbox" checked={checked} className="checkbox" onChange={handleCheckbox} />
                    <span className="fake"></span>
                </label>
                <p>Принимаю <span onClick={this}>условия</span> использования</p>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onModalDescription: () => {}
    }
}
export default connect(null, mapDispatchToProps)(Checkbox);