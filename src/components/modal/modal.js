import React, { Component } from 'react'
import succes from './images/185ad7479f20cbe5ddeaa548a37d586d.png'
import './modal.css'

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__content_images">
                        <img src={succes} />
                    </div>
                    <div className="modal__content_description">
                        <h2>Поздравляем КТО_ТО_ТАМ, вы успешно зарегистрировались!</h2>
                        <a href="/">Вернуться на предыдущую страницу</a>
                        <p>Письмо с инструкциями по подтверждению Вашего профиля было 
                            выслано на указанный адрес электронной почты: Exaample1@yandex.ru</p>
                        <button>Продолжить</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;