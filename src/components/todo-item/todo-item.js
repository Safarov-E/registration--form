import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const {handlerLanguageSelection, language} = this.props;
        return (
            <li onClick={() => handlerLanguageSelection(language)}>
                {language}
            </li>
        )
    }
}
export default TodoItem;