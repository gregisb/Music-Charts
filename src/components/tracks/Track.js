import React from 'react';
import { Link } from 'react-router-dom';

import { FaBeer } from 'react-icons/fa';
import { GiMusicSpell } from 'react-icons/gi';
import { BsDisc } from 'react-icons/bs'

const Track = (props) => {
    const { track } = props
    return (
        <div className="col-md-6">
            <div className="card mb-6 shadow-sm">
                <div className="card-body">
                  
                   <h5><strong><GiMusicSpell/> Track</strong>: {track.track_name}</h5>
                   <p className="card-text">
                       <strong><GiMusicSpell/> Artist</strong>: {track.artist_name}
                       <br/>
                       <strong><BsDisc /> Album</strong>: {track.album_name}
                   </p>
                   <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                      <FaBeer /> View Lyrics
                   </Link>
                </div>
            </div>

        </div>
    )
};

export default Track;