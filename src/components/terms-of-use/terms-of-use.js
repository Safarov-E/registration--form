import React, { Component } from 'react'
import {connect} from 'react-redux'
import './terms-of-use.css'
import {onModalDescriptionClose} from '../../store/actions/actions'

class TermsOfUse extends Component {
    render() {
        return (
            <div className="modal__description">
                <div className="modal__description_content">
                    <h2>Условия использования</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  </p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    <button onClick={() => this.props.onModalDescription()}>Продолжить</button>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onModalDescription: () => dispatch(onModalDescriptionClose())
    }
}
export default connect(null, mapDispatchToProps)(TermsOfUse);