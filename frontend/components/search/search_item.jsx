import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({video}) => {
    return (
        <li className="after-next">
            <Link to={`/watch/${video.id}`} className="next-video-container">
                <div className="search-video-list-thumbnail">
                    <img src={video.thumbnail} alt="video"/>
                </div>
                <div className="search-video-info">
                    <h2>{video.title}</h2>
                    <p className="creator-name">{video.creator}</p>
                    <div className="view-dot-date">
                        <p>{video.view_count} views <span>&#5867;</span> {video.doc}</p>
                    </div>
                    <p className="srdescription">{video.description}</p>
                </div>
            </Link>
        </li>
    )
}

export default SearchItem;