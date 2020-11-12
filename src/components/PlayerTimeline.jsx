import React from 'react';

function PlayerTimeline ({duration, currentTime, onClick}) {
  const clickHandler = evt => {
    const rect = evt.currentTarget.getBoundingClientRect();
    const positionX = evt.clientX - rect.left;
    const totalWidth= rect.width;
    const point = positionX / totalWidth * 100;
    const result = duration/100*point;
    onClick(result);
  }

  return(
    <div className="player__timeline" onClick={clickHandler}>
      <div 
      className="player__timeline-bar" 
      style={{
        width: `${currentTime /duration *100}%`
      }}></div>
    </div>
  )
};

export default PlayerTimeline;