import React, { Component } from 'react'
import classes from './registration-form.module.css'

class RegistrationForm extends Component {
    render() {
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
                        <div className={classes.select_wrapper}>
                            <p>Язык</p>
                            <ul>
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