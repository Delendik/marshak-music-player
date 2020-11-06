import React from "react"

import Song from "./Song"
import Play from "./Play"
import Pause from "./Pause"
import Bar from "./Bar"
import config from "./config"

import useAudioPlayer from './useAudioPlayer'


console.log(config.title)
console.log(config.sound)
console.log(config.author)

function Audio() {
    const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer()

    return (
        <div className="player">
            <audio id="audio">
            <source src={config.sound} />
            Your browser does not support the <code>audio</code> element.
            </audio>
            {playing ? <Pause handleClick={() => setPlaying(false)} /> 
            : 
            <Play handleClick={() => setPlaying(true)} />}
                <div className="controls">
                    <Song songName={config.title} songArtist={config.author} />
                    <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
                </div>
        </div>
    )
}

export default Audio