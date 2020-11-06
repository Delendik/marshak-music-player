import React from "react"
import play from '../images/player/play.svg'

export default function Play(props) {
    const { handleClick } = props

    return (
        <button className="player__button" onClick={() => handleClick()} >
        <img src={play} />
        </button>
    )
}