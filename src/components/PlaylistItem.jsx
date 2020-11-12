import React from 'react';

function PlaylistItem ({item, onClick}) {
  const { title, author1, author2, cover} = item;
  return(
    <div className = "playlist__item" onClick={()=>onClick(item)}>
      {title} - {author1} feat {author2}
    </div>
  )
};

export default PlaylistItem;