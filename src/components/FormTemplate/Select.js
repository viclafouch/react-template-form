import React from 'react'

const Select = (props) => {

    const defaultOptions = {
        className: '',
        disabled: false,
        defaultOptionTitle: 'defaultTitle'
    }

    let options = props.options || [];

    let classNames = props.className || defaultOptions.className
    if (typeof (props.valid) === "boolean") classNames += (props.valid) ? ' valid' : ' invalid';
    if (props.required === false && props.value === '') classNames = props.className || defaultOptions.className;

    return (
        <select
            className={classNames}
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            disabled={props.disabled || defaultOptions.disabled}
        >
            <option value="" disabled>{props.defaultOptionTitle || defaultOptions.defaultOptionTitle}</option>
            {
                options.map((elem, index) =>
                    <option key={index} value={elem}>{elem}</option>
                )
            }

        </select>
    )
}

export default Select
