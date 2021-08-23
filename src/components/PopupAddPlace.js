import React from 'react'
import { PopupWithForm } from './PopupWithForm';
import { Input } from './Input';

export function PopupAddPlace({onClose, isOpen}) {
    return (

        <PopupWithForm
            onClose={onClose}
            isOpen={isOpen}
            classText='add-card'
            name="addCardForm"
            header='Новое место'
            submitBtnText='Создать'
        >
            <Input
                className='popup__input popup__input_add popup__input_place'
                placeholder='Название'
                type="text"
                name='name'
                id='name'
            />
            <Input
                className='popup__input popup__input_add popup__input_link'
                placeholder='Ссылка на картинку'
                type="url"
                name='url'
                id='url'
            />
        </PopupWithForm>
    )
}















/* export function AddPlacePopup(props) {


    return(
        <>
        <PopupWithForm name='place' isOpen={props.isOpen}/>
        </>
    )
}
 */




