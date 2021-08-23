import React from "react";
import { Input } from "./Input";
import { PopupWithForm } from "./PopupWithForm";


export function PopupEditProfile({ onClose, isOpen }) {
    return (
        <PopupWithForm
            onClose={onClose}
            isOpen={isOpen}
            classText='edit-profile'
            name="editProfileForm"
            header='Редактировать профиль'
            submitBtnText='Сохранить'
        >
            <Input
                className='popup__input popup__input_name'
                placeholder='Жак-Ив Кусто'
                type="text"
                name='name'
                id='name'
            />
            <Input
                className='popup__input popup__input_job'
                placeholder='Исследователь океана'
                type="text"
                name='job'
                id='job'
            />
        </PopupWithForm>
    )
}