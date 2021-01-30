import React, { Component } from 'react'
import './registration-form.css'
import Input from '../input';
import {connect} from 'react-redux'
import {inputName, inputEmail, inputPhone, languageSelection, onChecked, onModal} from '../../store/actions/actions'
import Checkbox from '../checkbox'
import TodoList from '../todo-list'
import Modal from '../modal'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.select__head = React.createRef();
        this.border = React.createRef();
        this.state = {
            display: 'none',
            errorName: false,
            errorEmail: false,
            errorPhone: false,
            errorInpName: true,
            errorInpEmail: true,
            errorInpPhone: true
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
        if(/^[a-zA-Zа-яА-Я\s|-]{1,23}$/.test(event.target.value)) this.setState({ errorName : true, errorInpName: false })
        else this.setState({ errorName : false, errorInpName: false })
    }
    handleChangeInputEmail = (event) => {
        this.props.onInputEmail(event.target.value)
        if(/^[a-zA-Z0-9][a-zA-Z0-9._-]{1,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9-]{1,}\.[a-zA-Z]{2,5}$/.test(event.target.value)) {
            this.setState({ errorEmail : true, errorInpEmail: false })
        } else this.setState({ errorEmail : false, errorInpEmail: false  })
    }
    handleChangeInputPhone = (event) => {
        this.props.onInputPhone(event.target.value)
        if(/^\+?(?:[()-]*\d){11}[()-]*$/.test(event.target.value) && event.target.value !== '') this.setState({ errorPhone : true, errorInpPhone: false  })
        else this.setState({ errorPhone : false, errorInpPhone: false  })
    }
    handlerLanguageSelection = (value) => {
        this.props.onLanguageSelection(value)
    }
    handleCheckbox = (event) => {
        this.props.onChecked(event.target.checked)
    }
    handleBlurInputName = (event) => {
        if(event.target.value === '') {
            this.setState({ errorName : false, errorInpName: false })
        }
    }
    handleBlurInputEmail = (event) => {
        if(event.target.value === '') {
            this.setState({ errorEmail : false, errorInpEmail: false })
        }
    }
    handleBlurInputPhone = (event) => {
        if(event.target.value === '') {
            this.setState({ errorPhone : false, errorInpPhone: false })
        }
    }
    handleSubmit = (event) => {
        this.props.onModal()
        event.preventDefault()
    }
    render() {
        const {display, errorName, errorEmail, errorPhone, errorInpName, errorInpEmail, errorInpPhone} = this.state;
        const {name, email, phone, language, checked, modal, languages,} = this.props;
        return (
            <>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__validation">
                        <h2 className="form__title">Регистрация</h2>
                        <p className="form__description">Уже есть аккаунт? <span><a href="/">Войти</a></span></p>
                        <div className="form__label">
                            <Input nameInput={'Имя'}
                                    handleChange={this.handleChangeInputName}
                                    value={name} htmlFor={'name'}
                                    errorName={errorName} errorInpName={errorInpName}
                                    placeholder={'Введите Ваше имя'}
                                    handleBlur={this.handleBlurInputName}
                                    errorMessage={'Имя введено неправильно'} />
                        </div>
                        <div className="form__label_contactDetails">
                            <Input nameInput={'Email'}
                                    handleChange={this.handleChangeInputEmail}
                                    value={email} htmlFor={'email'}
                                    errorName={errorEmail} errorInpName={errorInpEmail}
                                    placeholder={'Введите ваш email'}
                                    handleBlur={this.handleBlurInputEmail}
                                    errorMessage={'Введено не корректное значение'} />
                        </div>
                        <div className="form__label_contactDetails">
                            <Input nameInput={'Номер телефона'}
                                    handleChange={this.handleChangeInputPhone}
                                    value={phone} htmlFor={'phone'}
                                    errorName={errorPhone} errorInpName={errorInpPhone}
                                    placeholder={'Введите номер телефона'}
                                    handleBlur={this.handleBlurInputPhone}
                                    errorMessage={'Номер телефона введен неправильно'} />
                        </div>
                        <TodoList 
                            selectListOpen={this.selectListOpen} 
                            select__head={this.select__head} 
                            border={this.border} language={language} 
                            display={display} languages={languages}
                            handlerLanguageSelection={this.handlerLanguageSelection} />
                        <Checkbox checked={checked} handleCheckbox={this.handleCheckbox} />
                        <div className={!(errorName && errorEmail && errorPhone && checked) ? "from__submit_disabled" : "from__submit"}>
                            <button disabled={!(errorName && errorEmail && errorPhone && checked)}>Зарегистрироваться</button>
                        </div>
                    </div>
                </form>
                {modal ? <Modal /> : null}
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        name: state.name,
        email: state.email,
        phone: state.phone,
        language: state.language,
        checked: state.checked,
        modal: state.modal,
        languages: state.languages
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onInputName: (name) => dispatch(inputName(name)),
        onInputEmail: (email) => dispatch(inputEmail(email)),
        onInputPhone: (phone) => dispatch(inputPhone(phone)),
        onLanguageSelection: (language) => dispatch(languageSelection(language)),
        onChecked: (checked) => dispatch(onChecked(checked)),
        onModal: () => dispatch(onModal())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)