import React, { Component } from 'react'
import succes from './images/185ad7479f20cbe5ddeaa548a37d586d.png'
import './modal.css'
import {connect} from 'react-redux'
import {onInputClear} from '../../store/actions/actions'

class Modal extends Component {
    handlerInputClear = () => {
        this.props.inputClear();
    }
    render() {
        const {name, email} = this.props
        return (
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__content_images">
                        <img src={succes} alt="succes" />
                    </div>
                    <div className="modal__content_description">
                        <h2>Поздравляем {name}, вы успешно зарегистрировались!</h2>
                        <span onClick={this.handlerInputClear}>Вернуться на предыдущую страницу</span>
                        <p>Письмо с инструкциями по подтверждению Вашего профиля было 
                            выслано на указанный адрес электронной почты: {email}</p>
                        <button onClick={this.handlerInputClear}>Продолжить</button>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        name: state.name,
        email: state.email
    }
}
function mapDispatchToProps(dispatch) {
    return {
        inputClear: () => dispatch(onInputClear())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);