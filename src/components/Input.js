import React from 'react';


export function Input({value, className, placeholder, type, name, id, onChange, inputRef}) {
    return (
        <section className='popup__section'>
            <input
                // если здесь ставить value={value} возникает ошибка, где реакт просит определиться: 
                // Decide between using a controlled or uncontrolled input element for the lifetime of the component.
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