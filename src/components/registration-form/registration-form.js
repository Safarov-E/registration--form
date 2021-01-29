import React, { Component } from 'react'
import classes from './registration-form.module.css'
import arrow from './images/Mask.png'
import {connect} from 'react-redux'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.select__head = React.createRef();
        this.border = React.createRef();
        this.state = {
            display: 'none',
            disabled: true,
            languages: [
                {id: 1, language: 'Русский'},
                {id: 2, language: 'Английский'},
                {id: 3, language: 'Китайский'},
                {id: 4, language: 'Испанский'}
            ],
            errorName: false,
            errorEmail: false,
            errorPhone: false
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
    handleChangeInputName = (event) => {
        this.props.onInputName(event.target.value)
    }
    handleChangeInputEmail = (event) => {
        this.props.onInputEmail(event.target.value)
    }
    handleChangeInputPhone = (event) => {
        this.props.onInputPhone(event.target.value)
    }
    handleBlurName = () => {
        if(/^[a-zA-Z\s\-а-яА-Я]{1,}$/i.test(this.props.name)) this.setState({ errorName : false })
        else this.setState({ errorName : true })
    }
    handleBlurEmail = () => {
        if(/^[a-zA-Z0-9][a-zA-Z0-9._-]{1,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9-]{1,}\.[a-zA-Z]{2,5}$/.test(this.props.email)) {
            this.setState({ errorEmail : false })
        } else this.setState({ errorEmail : true })
    }
    handleBlurPhone = () => {
        if(/^\+?(?:[()-]*\d){11}[()-]*$/.test(this.props.phone)) this.setState({ errorPhone : false })
        else this.setState({ errorPhone : true })
    }
    handlerLanguageSelection = (value, e) => {
        this.props.onLanguageSelection(value)
    }
    handleCheckbox = (event) => {
        this.props.onChecked(event.target.checked)
    }
    render() {
        const {display, disabled, errorName, errorEmail, errorPhone, languages} = this.state;
        const {name, email, phone, language, checked} = this.props;
        return (
            <form className={classes.form}>
                <div className={classes.form__validation}>
                    <h2 className={classes.form__title}>Регистрация</h2>
                    <p className={classes.form__description}>Уже есть аккаунт? <span><a href="/">Войти</a></span></p>
                    <div className={classes.form__label}>
                        <label htmlFor="name">
                            Имя  
                        </label><input type="text" id="name" 
                                        placeholder="Введите Ваше имя" 
                                        className={classes.form__label_input}
                                        onChange={this.handleChangeInputName}
                                        value={name}
                                        onBlur={this.handleBlurName} />
                        {errorName ? <span>Имя введено неправильно</span> : null}
                    </div>
                    <div className={classes.form__label_contactDetails}>
                        <label htmlFor="email">
                            Email  
                        </label><input type="text" id="email" 
                                        placeholder="Введите ваш email" 
                                        className={classes.form__label_input}
                                        value={email}
                                        onChange={this.handleChangeInputEmail} 
                                        onBlur={this.handleBlurEmail} />
                        {errorEmail ? <span>Введено не корректное значение</span> : null}
                    </div>
                    <div className={classes.form__label_contactDetails}>
                        <label htmlFor="phone">
                            Номер телефона  
                        </label><input type="text" id="phone" 
                                        placeholder="Введите номер телефона" 
                                        className={classes.form__label_input}
                                        value={phone}
                                        onChange={this.handleChangeInputPhone} 
                                        onBlur={this.handleBlurPhone} />
                        {errorPhone ? <span>Номер телефона введен неправильно</span> : null}
                    </div>
                    <div className={classes.form__label_language}>
                        <label htmlFor="language">
                            Язык
                        </label>
                        <div className={classes.select_wrapper} 
                            onClick={this.selectListOpen}
                            ref={this.border}>
                            <span><img src={arrow} alt="arrow" ref={this.select__head} /></span>
                            <p>{language ? language : 'Язык'}</p>
                            <ul className={classes.select__list} style={{display}}>
                                {
                                    languages.map(item => {
                                        return <li key={item.id} 
                                                    onClick={(e) => this.handlerLanguageSelection(item.language, e)}>
                                                    {item.language}
                                                </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={classes.from__checkbox}>
                        <label>
                            <input type="checkbox" checked={checked} className={classes.checkbox} onChange={this.handleCheckbox} />
                            <span className={classes.fake}></span>
                        </label>
                        <p>Принимаю <span>условия</span> использования</p>
                    </div>
                    <div className={!(errorName || errorEmail || errorPhone || checked) ? classes.from__submit_disabled : classes.from__submit}>
                        <button disabled={!(errorName || errorEmail || errorPhone || checked)}>Зарегистрироваться</button>
                    </div>
                </div>
            </form>
        )
    }
}
function mapStateToProps(state) {
    return {
        name: state.name,
        email: state.email,
        phone: state.phone,
        language: state.language,
        checked: state.checked
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onInputName: (name) => dispatch({type: "NAME_INPUT", payload: name}),
        onInputEmail: (email) => dispatch({type: "EMAIL_INPUT", payload: email}),
        onInputPhone: (phone) => dispatch({type: "PHONE_INPUT", payload: phone}),
        onLanguageSelection: (language) => dispatch({type: "LANGUAGE_SELECTION", payload: language}),
        onChecked: (checked) => dispatch({type: "CHECKED", payload: checked}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)