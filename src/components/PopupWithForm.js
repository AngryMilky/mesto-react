import React from 'react';


function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}  ${props.isOpen && 'popup_opened'}`}   >
      <div className="popup__container">
        <button className={`popup__button-close popup__button-close_type_${props.name}`}
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}>
        </button>
        <form className={`popup__form popup__form_type_${props.name}`}
          name={`${props.name}`}
          novalidate>
          <h2 className="popup__title">{props.title}</h2>
          <button className="popup__button-save popup__button-submit" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </div>
  )
}




export default PopupWithForm;