import React, {Component} from 'react';
import Spinner from '../Layout/Spinner';
import Track from '../tracks/Track'

import { Consumer } from '../../context';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
              {(value) => {
                  const { track_list, heading } = value
                  console.log(track_list);
                  if(track_list === undefined || track_list.length === 0) {
                    return <Spinner />
                  } else {
                    return (
                       <> 
                        <h3 className="text-center mb-04">{heading}</h3>
                          <div className="row">
                            {track_list.map((item) => {
                                return <Track key={item.track.track_id} track={item.track}/>
                            })}
                          </div>
                       </> 
                    )
                  }
              }}
            </Consumer>
        )
    }
};

export default Tracks