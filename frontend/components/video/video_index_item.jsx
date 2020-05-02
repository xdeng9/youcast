import React from 'react';

const VideoIndexItem = ({video}) => {

    return (
        <li className="videoItemContainer">
            <div className="thumbnail-wrapper"> 
                <img className="thumbnail" src={video.thumbnail} />
            </div>
        </li>
    )
}

export default VideoIndexItem;