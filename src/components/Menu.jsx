import React, { useState } from 'react';

function Menu () {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth)

  function changeWidth(){
    setWidthWindow(window.innerWidth);
  }
  window.addEventListener('resize', ()=> changeWidth());
  if (widthWindow > 760){
    return(
      <nav className = "navigation">
        <ul className = "navigation__list">
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
  } else {
    return(
      <nav className = "navigation">
        <button className = "navigation__mobile navigation__item ">
          <div className= "navigation__link hover">Стриминги</div> 
        </button>
        <ul className = "navigation__list">
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

export default Menu;