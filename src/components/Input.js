import React from 'react';


export function Input(props) {
    return (
        <section>
            <input
                className={props.className}
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                id={props.id}
                />
        </section>
    )

}