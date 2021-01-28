import React, { Component } from 'react'
import classes from './registration-form.module.css'
import arrow from './images/Mask.png'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0
        }
    }
    selectListOpen = () => {
        if (this.state.opacity === 0) this.setState({ opacity: 1 })
        else this.setState({ opacity: 0 })
    }
    render() {
        const {opacity} = this.state;
        return (
            <form className={classes.form}>
                <div className={classes.form__validation}>
                    <h2 className={classes.form__title}>Регистрация</h2>
                    <p className={classes.form__description}>Уже есть аккаунт? <span><a href="/">Войти</a></span></p>
                    <div className={classes.form__label}>
                        <label htmlFor="name">
                            Имя  
                        </label><input type="text" id="name" placeholder="Введите Ваше имя" className={classes.form__label_input} />
                    </div>
                    <div className={classes.form__label_contactDetails}>
                        <label htmlFor="email">
                            Email  
                        </label><input type="text" id="email" placeholder="Введите ваш email" className={classes.form__label_input} />
                    </div>
                    <div className={classes.form__label_contactDetails}>
                        <label htmlFor="phone">
                            Номер телефона  
                        </label><input type="text" id="phone" placeholder="Введите номер телефона" className={classes.form__label_input} style={{}} />
                    </div>
                    <div className={classes.form__label_language}>
                        <label htmlFor="language">
                            Язык
                        </label>
                        <div className={classes.select_wrapper} 
                            onClick={this.selectListOpen}>
                            <span><img src={arrow} /></span>
                            <p>Язык</p>
                            <ul className={classes.select__list} style={{opacity}}>
                                <li>Русский</li>
                                <li>Английский</li>
                                <li>Китайский</li>
                                <li>Испанский</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default RegistrationForm;