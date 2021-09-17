import React from 'react';


export function Input({className, placeholder, type, name, id, onChange, inputRef}) {
    return (
        <section>
            <input
                className={className}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                onChange={onChange}
                ref={inputRef}
                />
        </section>
    )

}