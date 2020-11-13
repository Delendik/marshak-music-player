import React, { useState } from 'react';
import closeButton from '../images/closeMenu.svg';

function MobileNav() {
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleClicked() {
    setButtonClicked(!buttonClicked);
  }

  if(!buttonClicked){
    return(
      <nav className = "navigation">
        <button className = "navigation__mobile navigation__item " onClick={ handleClicked }>
          <div className= "navigation__link hover">Стриминги</div> 
        </button>
      </nav>
    )
  } else{
    return(
      <nav className = "navigation">
        <ul className = "navigation__list">
          <li className = "navigation__item" onClick={ handleClicked }>
            <img className= "navigation__close-button" src={closeButton} alt="Закрыть меню стримингов" />
          </li>
          <li className = "navigation__item">
            <a href="https://vk.com/vkmusic" target="_blank" rel="noreferrer" title = "VK Music" className="navigation__link hover">Яндекс.Музыка ↗</a>
          </li>
          <li className = "navigation__item">
            <a href="https://vk.com/vkmusic" target="_blank" rel="noreferrer" title = "VK Music" className="navigation__link hover">Spotify ↗</a>
          </li>
          <li className = "navigation__item">
            <a href="https://vk.com/vkmusic" target="_blank" rel="noreferrer" title = "VK Music" className="navigation__link hover">Apple Music ↗</a>
          </li>
          <li className = "navigation__item">
            <a href="https://vk.com/vkmusic" target="_blank" rel="noreferrer" title = "VK Music" className="navigation__link hover">VK Music ↗</a>
          </li>
        </ul> 
      </nav>
    )
  }
};

export default MobileNav;