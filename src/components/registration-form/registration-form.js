import React, { Component } from 'react'
import classes from './registration-form.module.css'
import arrow from './images/Mask.png'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.select__head = React.createRef();
        this.border = React.createRef();
        this.state = {
            display: 'none',
            disabled: true
        }
    }
    selectListOpen = () => {
        if (this.state.display === 'none') {
            this.border.current.style.boxShadow = '0 0 5px rgb(8 128 174)'
            this.setState({ display: 'block' })
            let rotate = 0;
            let interval = setInterval(() => {
                this.select__head.current.style.transform = `rotate(${rotate}deg)`;
                rotate += 5;
                if(rotate > 180) clearInterval(interval)
            }, 10)
        }
        else {
            this.setState({ display: 'none' })
            this.border.current.style.boxShadow = '0px 4px 8px rgba(44, 39, 56, 0.04)'
            let rotate = 180;
            let interval = setInterval(() => {
                this.select__head.current.style.transform = `rotate(${rotate}deg)`;
                rotate -= 5;;
                if(rotate < 0) clearInterval(interval)
            }, 10)
        }
    }
    render() {
        const {display, disabled} = this.state;
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
                        </label><input type="text" id="phone" placeholder="Введите номер телефона" className={classes.form__label_input}/>
                    </div>
                    <div className={classes.form__label_language}>
                        <label htmlFor="language">
                            Язык
                        </label>
                        <div className={classes.select_wrapper} 
                            onClick={this.selectListOpen}
                            ref={this.border}>
                            <span><img src={arrow} alt="arrow" ref={this.select__head} /></span>
                            <p>Язык</p>
                            <ul className={classes.select__list} style={{display}}>
                                <li>Русский</li>
                                <li>Английский</li>
                                <li>Китайский</li>
                                <li>Испанский</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.from__checkbox}>
                        <label>
                            <input type="checkbox" className={classes.checkbox} />
                            <span className={classes.fake}></span>
                        </label>
                        <p>Принимаю <span>условия</span> использования</p>
                    </div>
                    <div className={disabled ? classes.from__submit_disabled : classes.from__submit}>
                        <button disabled={disabled}>Зарегистрироваться</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default RegistrationForm;