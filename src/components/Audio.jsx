import React from "react"

import Song from "./Song"
import Play from "./Play"
import Pause from "./Pause"
import Bar from "./Bar"
import config from "../data/config"

import useAudioPlayer from './useAudioPlayer'

function Audio() {
    const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer()
    const {title, author, sound} = config

    return (
        <div className="player">
            <audio id="audio">
            <source src={sound}/>
            Your browser does not support the <code>audio</code> element.
            </audio>
            {playing ? 
            <Pause handleClick={() => setPlaying(false)} /> 
            : 
            <Play handleClick={() => setPlaying(true)} />
            }
            <div className="controls">
                <Song songName={title} songArtist={author} />
                <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
            </div>
        </div>
    )
}

export default Audio