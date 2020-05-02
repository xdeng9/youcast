import React from 'react';

const VideoIndexItem = ({video}) => {

    return (
        <li className="videoItemContainer">
            <div className="thumbnail-wrapper"> 
                <img className="thumbnail" src={video.thumbnail} />
            </div>
            <div>
                <p className="video-title">{video.title}</p>
                <section className="video-details">
                    <span>{video.creator}</span>
                    <p>{video.view_count} views <span>&#5867;</span> {video.doc}</p>
                </section>
            </div>
        </li>
    )
}

export default VideoIndexItem;