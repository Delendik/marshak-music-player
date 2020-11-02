import React from 'react';

function Form() {
  return (
    <form action="" className="form">
      <h2 className="form__title">Форма.</h2>
      <p className="form__subtitle">Заполняя эту форму, вы становитесь частью проекта</p>
      <input type="text" placeholder="Имя и фамилия автора" name="name" className="form__input"/>
      <input type="tel" placeholder="Телефон" name="tel" className="form__input"/>
      <input type="email" placeholder="Почта" name="email" className="form__input"/>
      <textarea placeholder="Стихи" className="form__input form__input_size_l " name="text_large"/>
      <div className="form__row">
        <input id="radio" type="radio" name="radio" className="form__radio-button"/>
        <p className="form__paragraph">Согласен с
          <a href="#" className="form__link">офертой</a></p>
      </div>
      <button type="submit" className="form__submit-button">Отправить форму</button>
    </form>
  )
};

export default Form