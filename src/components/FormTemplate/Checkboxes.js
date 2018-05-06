import React from 'react'

const Checkboxes = (props) => {

    const defaultOptions = {
        className: '',
    }

    let classNames = props.className || defaultOptions.className
    if (typeof (props.valid) === "boolean") classNames += (props.valid) ? ' valid' : ' invalid';
    if (props.required === false && props.value === '') classNames = props.className || defaultOptions.className;

    return (
        props.options.map((elem, index) => {
            return(
                <div key={index} className={"flex-me row-field "+classNames}>
                    <input
                        type="radio"
                        value={elem}
                        name={props.name}
                        id={elem}
                        onChange={props.onChange}
                        checked={(elem === props.value)}
                    />
                    <label htmlFor={elem}>
                        {elem}
                    </label>
                </div>
            )
        })
    )
}

export default Checkboxes
