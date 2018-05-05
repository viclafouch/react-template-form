import React from 'react'

const Input = (props) => {

    const defaultOptions = {
        className: '',
        type: 'text',
        spellCheck: true,
        autoComplete: 'on',
        placeholder: '',
        disabled: false,
        maxLength: 524288,
        minLength: 0,
    }

    return (
        <input
            className={props.className || defaultOptions.className}
            id={props.name}
            name={props.name}
            type={props.type || defaultOptions.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder || defaultOptions.placeholder}
            spellCheck={props.spellCheck || defaultOptions.spellCheck}
            autoComplete={props.autoComplete || defaultOptions.autoComplete}
            disabled={props.disabled || defaultOptions.disabled }
            maxLength={props.maxLength || defaultOptions.maxLength }
            minLength={props.minLength || defaultOptions.minLength }
        />
    )
}

export default Input
