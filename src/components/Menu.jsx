import React from 'react';

function Menu () {
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
};

export default Menu;