import React, { Component } from 'react'
import {connect} from 'react-redux'
import {onModalDescriptionOpen} from '../../store/actions/actions'

class Checkbox extends Component {
    render() {
        const {checked, handleCheckbox} = this.props;
        return (
            <div className="from__checkbox">
                <label>
                    <input type="checkbox" checked={checked} className="checkbox" onChange={handleCheckbox} />
                    <span className="fake"></span>
                </label>
                <p>Принимаю <span onClick={() => this.props.onModalDescription()}>условия</span> использования</p>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onModalDescription: () => dispatch(onModalDescriptionOpen()),
    }
}
export default connect(null, mapDispatchToProps)(Checkbox);