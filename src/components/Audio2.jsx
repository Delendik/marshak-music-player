import React, { useState, useRef } from 'react';
import playList from '../data/config'
import PlaylistItem from './PlaylistItem'
import PlayerTimeline from "./PlayerTimeline"
import throttle from '../utils/throttling'
import msToTime from '../utils/convert-ms-min'
import play1 from '../images/player/play1.svg';
import pause1 from '../images/player/pause1.svg';
import openPlayList from '../images/player/openPlayList.svg';

function Audio2 () {
  const [currentTrack, setCurrentTrack] = useState(playList[0]);
  //текущее время(сколько прошло)
  const [currentTime, setCurrentTime] = useState(0);
  //после запуска ежесекундно обновлять currentTime
  //длина трека
  const [duration, setDuration] = useState(0);
  //пауза стоп кнопка
  const [isPlaying, setIsPlaying] = useState(false);
  //меняем состояние при стоп пауза

  const myPlayer = useRef(null)
  const onTimeUpdate = throttle((evt) => {
    //console.log({ evt: new Date(evt.timeStamp) })
    setCurrentTime(evt.target.currentTime)
  }, 1000)

  const onPlay = (evt) => {
    setDuration(evt.target.duration)
  }

  const onPause = (evt) => {
    
  }

  return(
    <div className = "player">
      <div className="grid__1">
        <audio 
          className="player__default"
          src={currentTrack.file}
          controls
          ref={myPlayer}
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate = {onTimeUpdate}
          onLoadedData={() => setDuration(myPlayer.current.duration)}
        >
          Your browser doesn't support audio
        </audio>
        <button 
          className="player__button"
          onClick={() =>{
            if(isPlaying){
              myPlayer.current.pause();
              setIsPlaying(false)
            } else{
              myPlayer.current.play();
              setIsPlaying(true)
            }
          }}
        > <img src={isPlaying ? pause1 : play1} alt={isPlaying ? 'пауза' : 'старт'} className="player__button-image" /> </button>
      </div>
      <div>
        <div className="player__info-part">
          <div className="player__control">
            {currentTrack.title} - {currentTrack.author1} feat {currentTrack.author2}
          </div>
          <div className="player__time">{msToTime(Math.round(currentTime))} </div>
          {/* <div>duration: {msToTime(Math.round(duration))} </div> */}
        </div>
      </div>
      <div className="player__button">
        <img src={openPlayList} alt="Плейлист" className="player__button-playlist_open" />
      </div>
      <div></div>
      <PlayerTimeline 
        currentTime={currentTime}
        duration={duration}
        onClick={time => {
          myPlayer.current.currentTime=time
        }}
      />
      <div></div>
        
        {/* <div className="playlist">
          <div className="playlist__title">Релизы:</div>
          {playList.map(item => <PlaylistItem 
            item={item} 
            key={item.id}
            onClick={item => {
              setCurrentTrack(item)
              setIsPlaying(false)
              }} 

          />)}
        </div> */}
    </div>
  )
};

export default Audio2;