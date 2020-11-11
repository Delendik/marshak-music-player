import React from 'react';

function Form() {
  //ЛОГИКА ВАЛИДАЦИИ

  //ВАЛИДАЦИЯ ЧЕКБОКСА
  const checkCheckboxValidity = (evt) => {
    if (!document.querySelector('.form').querySelector('#checkbox_1').validity.valid) {
      document.querySelector('.form').querySelector('.form__row').classList.add('form__row_error')
      document.querySelector('.form').querySelector('.form__link').classList.add('form__link_error')
    } else {
      document.querySelector('.form').querySelector('.form__row').classList.remove('form__row_error')
      document.querySelector('.form').querySelector('.form__link').classList.remove('form__link_error')
    }
    toggleButtonState()
  }

  //ВАЛИДАЦИЯ ИНПУТОВ
  const checkInputValidity = (evt) => {
    if (evt.target.validity.valid) {
      evt.target.classList.remove('form__input_error')
      evt.target.nextSibling.textContent = ''
      evt.target.style = "color: #000000;"
    } else {
      evt.target.classList.add('form__input_error')
      evt.target.style = "color: #F00"
      if (evt.target.type === 'tel') {
        evt.target.nextSibling.textContent = 'Пожалуйста введите номер телефона.'
      } else {
        if (evt.target.type === 'email') {
          evt.target.nextSibling.textContent = 'Введите адрес электронной почты.'
        } else {
          evt.target.nextSibling.textContent = 'Введите имя и фамилию.'
        }
      }
    }
    toggleButtonState()

  }

  //ВАЛИДАЦИЯ КНОПКИ
  const toggleButtonState = () => {
    console.log(checkInvalidValidity())
    if (checkInvalidValidity() === false) {

      document.querySelector('.form').querySelector('.form__submit-button').disabled = false;
      document.querySelector('.form').querySelector('.form__submit-button').classList.remove('form__submit-button_disable')
    } else {
      document.querySelector('.form').querySelector('.form__submit-button').disabled = true;
      document.querySelector('.form').querySelector('.form__submit-button').classList.add('form__submit-button_disable');
    }
  }

  // ПРОВЕРКА ВАЛИДАЦИИ ВСЕЙ ФОРМЫ
  const checkInvalidValidity = () => {
    const form = document.querySelector('.form')
    const inputList = Array.from(form.querySelectorAll('.form__input'))

    inputList.push(form.querySelector('#checkbox_1'))
    return inputList.some((item) => {
      return !item.validity.valid
    })
  }


  // ЛОГИКА САБМИТА
  const submitFunction = (evt) => {
    evt.preventDefault()
    if (checkInvalidValidity()) {
      console.log('Отправляем данные на сервер')
    } else {
      console.log('С валидацией всё плохо')
    }
  }

  return (
    <form noValidate action="" className="form">
      <h2 className="form__title">Форма.</h2>
      <p className="form__subtitle">Заполняя эту форму, вы становитесь частью проекта</p>
      <input onInput={checkInputValidity}
             type="text"
             placeholder="Имя и фамилия автора"
             name="name"
             className="form__input"
             minLength="5"
             required/>
      <span id="input-name-error"
            className="form__input_type_error"></span>
      <input type="tel"
             onInput={checkInputValidity}
             placeholder="Телефон"
             name="tel"
             className="form__input"
             pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
             required/>
      <span id="input-tel-error"
            className="form__input_type_error"></span>
      <input type="email"
             onInput={checkInputValidity}
             placeholder="Почта"
             name="email"
             className="form__input"
             required/>
      <span id="input-email-error"
            className="form__input_type_error"></span>
      <textarea placeholder="Стихи"
                className="form__input form__input_size_l "
                name="text_large"
                required/>
      <div className="form__row">
        <div className="checkbox">
          <input onInput={checkCheckboxValidity} type="checkbox" required id="checkbox_1"/>
          <label htmlFor="checkbox_1">
          </label>
        </div>
        <div>
          <p className="form__paragraph">Согласен с
            <a href="/" className="form__link">офертой</a></p>
        </div>
      </div>
      <button onClick={submitFunction} type="submit" className="form__submit-button">Отправить форму</button>
      <span id="input-submit-error" className="form__input_type_error"></span>
    </form>
  )
};

export default Form