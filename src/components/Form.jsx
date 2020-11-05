import React from 'react';

function Form() {
  return (
    <form action="" className="form">
      <h2 className="form__title">Форма.</h2>
      <p className="form__subtitle">Заполняя эту форму, вы становитесь частью проекта</p>
      <input type="text" placeholder="Имя и фамилия автора" name="name" className="form__input" minLength="5" pattern="/^[а-яА-я ._-]+$/" required/>
      <span id="input-name-error" className="popup__error "></span>
      <input type="tel" placeholder="Телефон" name="tel" className="form__input" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" required/>
      <span id="input-tel-error" className="popup__error "></span>
      <input type="email" placeholder="Почта" name="email" className="form__input" required/>
      <span id="input-email-error" className="popup__error "></span>
      <textarea placeholder="Стихи" className="form__input form__input_size_l " name="text_large" required/>
      <div className="form__row">
        <div className="checkbox">
          <input type="checkbox" required id="checkbox_1"/>
          <label htmlFor="checkbox_1">
          </label>
        </div>
        <div>
          <p className="form__paragraph">Согласен с
            <a href="#" className="form__link">офертой</a></p>
        </div>
      </div>
      <button type="submit" className="form__submit-button">Отправить форму</button>
    </form>
  )
};

export default Form