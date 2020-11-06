import React from 'react'


function Song(props) {
    const { songName, songArtist } = props

    return (
        <div className="song">
            <h2 className="song__title">{songName}</h2>
            <h2 className="song__separation"> &nbsp; &#8211; &nbsp; </h2>
            <h2 className="song__artist">{songArtist}</h2>
        </div>
    )
}

export default Song