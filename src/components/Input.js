import React from 'react';


export function Input({className, placeholder, type, name, id}) {
    return (
        <section>
            <input
                className={className}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                />
        </section>
    )

}