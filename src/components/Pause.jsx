import React from "react"
import stop from '../images/player/stop.svg'

export default function Play(props) {
    const { handleClick } = props

    return (
        <button className="player__button" onClick={() => handleClick()}>
        <img src={stop} className="player__button_stop"/>
        </button>
    )
}