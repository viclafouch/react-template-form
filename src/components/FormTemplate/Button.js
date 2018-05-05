import React from 'react'

const Button = (props) => {

    let defaultOptions = {
        title: 'Save',
        disabled: false,
    }

    return (
        <button
            disabled={props.disabled || defaultOptions.disabled}
        >{props.title || defaultOptions.title}</button>
    )
}

export default Button
