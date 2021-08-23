import React from 'react';
import { PopupWithForm } from './PopupWithForm';
import { Input } from './Input';

export function PopupEditAvatar({ onClose, isOpen }) {
    return (
        <PopupWithForm
            onClose={onClose}
            isOpen={isOpen}
            classText='avatar'
            name="editAvatar"
            header='Обновить аватар'
            submitBtnText='Сохранить'>
            <Input
                className='popup__input  popup__input_avatar popup__input_place'
                placeholder='Ссылка на новый аватар'
                type="url"
                name='avatar'
                id='avatar'
            />
        </PopupWithForm>
    )
}

