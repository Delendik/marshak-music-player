import React from 'react';

function Form() {
  //____________________КОНФИГ API____________________
  const Api = {
    url: 'https://lolkek.com/',
    auth: '77777777777777777777777'
  }

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
          if (evt.target.classList.contains("form__input_size_l")) {
            evt.target.nextSibling.textContent = 'Введите стихи.'
          } else {
            evt.target.nextSibling.textContent = 'Введите имя и фамилию.'
          }
        }
      }
    }
    toggleButtonState()
  }

  //ВАЛИДАЦИЯ КНОПКИ
  const toggleButtonState = () => {
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

  const controlError = (promise) => {
    return promise.then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      } else {
        return res.json()
      }
    })
  }

  const postApi = (data) => {
    const promise = fetch(`${Api.url}`, {
      method: 'POST',
      headers: {
        authorization: `${Api.auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return controlError(promise)
  }

  // ЛОГИКА САБМИТА
  const submitFunction = (evt) => {
    evt.preventDefault()
    const form = document.querySelector('.form')
    if (!toggleButtonState()) {
      postApi({
        name: form.querySelector('.form__input-name').value,
        phone: form.querySelector('.form__input-phone').value,
        email: form.querySelector('.form__input-email').value,
        poem: form.querySelector('.form__input-poem').value
      })
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
             className="form__input form__input-name"
             minLength="5"
             required/>
      <span className="form__input_type_error"></span>
      <input type="tel"
             onInput={checkInputValidity}
             placeholder="Телефон"
             name="tel"
             className="form__input form__input-phone"
             pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
             required/>
      <span className="form__input_type_error"></span>
      <input type="email"
             onInput={checkInputValidity}
             placeholder="Почта"
             name="email"
             className="form__input form__input-email"
             required/>
      <span className="form__input_type_error"></span>
      <textarea placeholder="Стихи"
                minLength="20"
                onInput={checkInputValidity}
                className="form__input form__input_size_l form__input-poem"
                name="text_large"
                required/>
      <span className="form__input_type_error"></span>
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
      <button onClick={submitFunction} type="submit"
              className="form__submit-button form__submit-button_disable">Отправить форму
      </button>
      <span id="input-submit-error" className="form__input_type_error"></span>
    </form>
  )
}

export default Form