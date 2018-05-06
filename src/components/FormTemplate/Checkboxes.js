import React from 'react'

const Checkboxes = (props) => {
    return (
        props.options.map((elem, index) => {
            return(
                <div key={index} className="flex-me row-field">
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
