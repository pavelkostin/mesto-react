//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <img className="header__logo" src="" alt="логотип проекта Место" />
        </header>
        <section className="profile">
          <div className="profile__info">
            <img className="profile__avatar" src=">" alt="avatar" />
            <div className="profile__table">
              <div className="profile__name">Жак-Ив Кусто</div>
              <button className="profile__edit" type="button"></button>
              <div className="profile__job">Исследователь океана</div>
            </div>
          </div>
          <button className="profile__add" type="button"></button>
        </section>
        <section className="cards">
          <ul className="cards__list">
          </ul>
        </section>
        <footer className="footer">
          <p className="footer__caption">© 2021 Mesto Russia</p>
        </footer>
        <section className="popup popup_edit-profile">
          <div className="popup__container">
            <button className="popup__close popup__close_edit-profile"></button>
            <form className="popup__form popup__form_edit-profile" name="editProfileForm">
              <h2 className="popup__header">Редактировать профиль</h2>
              <section className="popup__section">
                <input className="popup__input popup__input_name" placeholder="Жак-Ив Кусто"
                  required type="text" name="name" id="name" minLength="2" maxLength="40" />
                <span className="popup__input-error" id="name-error"></span>
              </section>
              <section className="popup__section">
                <input className="popup__input popup__input_job" placeholder="Исследователь океана"
                  required type="text" name="job" id="job" minLength="2" maxLength="200" />
                <span className="popup__input-error" id="job-error"></span>
              </section>
              <button className="popup__submit popup__submit_edit-profile" type="submit">Сохранить</button>
            </form>
          </div>
        </section>
        <section className="popup popup_add-card">
          <div className="popup__container">
            <button className="popup__close popup__close_add-card"></button>
            <form className="popup__form popup__form_add-place" name="addCardForm">
              <h2 className="popup__header">Новое место</h2>
              <section className="popup__section">
                <input className="popup__input popup__input_add popup__input_place" placeholder="Название"
                  required type="text" name="place" id="place" minLength="2" maxLength="30" />
                <span className="popup__input-error" id="place-error"></span>
              </section>
              <section className="popup__section">
                <input className="popup__input popup__input_add popup__input_link" placeholder="Ссылка на картинку"
                  required type="url" name="url" id="url" />
                <span className="popup__input-error" id="url-error"></span>
              </section>
              <button className="popup__submit popup__submit_add-card" type="submit">Создать</button>
            </form>
          </div>
        </section>
        <section className="popup popup_gallery">
          <div className="popup__container popup__container_gallery">
            <button className="popup__close popup__close_gallery"></button>
            <img className="popup__image" src=" " alt=" " />
            <p className="popup__caption"></p>
          </div>
        </section>
        <section className="popup popup_confirm">
          <div className="popup__container">
            <button className="popup__close popup__close_gallery"></button>
            <h2 className="popup__header">Вы уверены?</h2>
            <form className="popup__form popup__form_delete">
              <button className="popup__submit popup__submit-delete" type="submit">Да</button>
            </form>
          </div>
        </section>
        <section className="popup popup_avatar">
          <div className="popup__container">
            <button className="popup__close popup__close_gallery"></button>
            <h2 className="popup__header">Обновить аватар</h2>
            <form className="popup__form popup__form_add-place popup__form_edit-avatar" name="editAvatar">
              <section className="popup__section">
                <input className="popup__input  popup__input_avatar popup__input_place" placeholder="Ссылка на новый аватар"
                  required type="url" name="avatar" id="avatar" />
                <span className="popup__input-error" id="avatar-error"></span>
              </section>
              <span className="popup__input-error"></span>
              <button className="popup__submit popup__submit_add-card" id="popupSubmitAvatar" type="submit">Сохранить</button>
            </form>
          </div>
        </section>
        <template className="template">
          <li className="cards__item">
            <img className="cards__photo" src=" " alt=" " />
            <p className="cards__place"></p>
            <button className="cards__delete"></button>
            <button className="cards__like"></button>
            <p className="cards__quantity-likes"></p>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
