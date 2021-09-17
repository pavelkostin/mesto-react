import React from "react";
import { useState } from "react/cjs/react.development";
import { Input } from "./Input";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export function PopupEditProfile({ onUpdateUser, onClose, isOpen }) {

    const [name, setName] = useState('')
    const [about, setAbout] = useState('')

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser]);

    function changeName(e) {
        setName(e.target.value)
    }

    function changeAbout(e) {
        setAbout(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about
        });
    }

    return (
        <PopupWithForm
            onClose={onClose}
            isOpen={isOpen}
            classText='edit-profile'
            name="editProfileForm"
            header='Редактировать профиль'
            submitBtnText='Сохранить'
            onSubmit={handleSubmit}
        >
            <Input
                className='popup__input popup__input_name'
                placeholder='Жак-Ив Кусто'
                type="text"
                name='name'
                id='name'
                onChange={changeName}
            />
            <Input
                className='popup__input popup__input_job'
                placeholder='Исследователь океана'
                type="text"
                name='job'
                id='job'
                onChange={changeAbout}
            />
        </PopupWithForm>
    )
}