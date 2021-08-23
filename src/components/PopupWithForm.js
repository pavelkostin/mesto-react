
export function PopupWithForm({ classText, isOpen, onClose, header, name, children, submitBtnText }) {
    return (
        <>
            <section className={`popup popup_${classText} ${isOpen && 'popup_visible'}`}>
                <div className="popup__container">
                    <button onClick={onClose} className="popup__close"></button>
                    <h2 className="popup__header">{header}</h2>
                    <form className="popup__form" name={name}>
                        {children}
                        <button className="popup__submit" type="submit">{submitBtnText}</button>
                    </form>
                </div>
            </section>
        </>
    )
}


