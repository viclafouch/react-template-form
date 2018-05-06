import React from 'react'

const Button = (props) => {

    let defaultOptions = {
        title: 'Save',
        type: 'submit',
        disabled: false,
    }

    return (
        <button
            type={props.reset ? 'reset' : defaultOptions.type}
            onClick={props.onClick}
            disabled={props.disabled || defaultOptions.disabled}
        >{props.title || defaultOptions.title}</button>
    )
}

export default Button
