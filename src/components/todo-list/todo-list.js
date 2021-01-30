import React, { Component } from 'react'
import arrow from '../registration-form/images/Mask.png'

class TodoList extends Component {
    render() {
        const {selectListOpen, border, select__head, language, display, languages, handlerLanguageSelection} = this.props;
        return (
            <div className="form__label_language">
                <label htmlFor="language">
                    Язык
                </label>
                <div className="select_wrapper"
                    onClick={selectListOpen}
                    ref={border}>
                    <span><img src={arrow} alt="arrow" ref={select__head} /></span>
                    <p>{language ? language : 'Язык'}</p>
                    <ul className="select__list" style={{display}}>
                        {
                            languages.map(item => {
                                return <li key={item.id} 
                                            onClick={(e) => handlerLanguageSelection(item.language, e)}>
                                            {item.language}
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default TodoList;