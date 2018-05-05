import React from 'react'

const Textarea = (props) => {

    const defaultOptions = {
        className: '',
        placeholder: '',
        disabled: false,
        maxLength: 524288,
        minLength: 0,
        rows: 2,
        cols: 20,
        wrap: 'soft'
    }

    let classNames = props.className || defaultOptions.className
    if (typeof (props.valid) === "boolean") classNames += (props.valid) ? ' valid' : (props.value) ? ' invalid' : '';

    return (
        <textarea
            className={classNames}
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder || defaultOptions.placeholder}
            disabled={props.disabled || defaultOptions.disabled}
            maxLength={props.maxLength || defaultOptions.maxLength}
            minLength={props.minLength || defaultOptions.minLength}
            rows={props.rows || defaultOptions.rows }
            cols={props.cols || defaultOptions.cols }
            wrap={props.wrap || defaultOptions.wrap }
        >{props.value}</textarea>
    )
}

export default Textarea
