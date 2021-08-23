

export function PopupWithForm(props) {
    return (
        <>
        <section className={`popup popup_${props.classText} ${props.isOpen && 'popup_visible'}`}>
            <div className="popup__container">
                <button onClick={props.onClose} className="popup__close"></button>
                <h2 className="popup__header">{props.header}</h2>
                <form className="popup__form" name={props.name}>

                    {props.children}
                    
                    <button className="popup__submit" type="submit">{props.submitBtnText}</button>
                </form>
                
            </div>
        </section>    
        </>
    )
}


