import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video';
import SearchItem from './search_item';

const mapStateToProps = state => ({
    videos: Object.values(state.entities.videos) 
})

const mapDispatchToProps = dispatch => ({
    searchVideos: query => dispatch(searchVideos(query))
})

class SearchResult extends React.Component {

    componentDidMount() {
        this.props.searchVideos(this.props.match.params.query)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.query !== this.props.match.params.query) {
            this.props.searchVideos(this.props.match.params.query);
        }
    }

    renderNoResult() {
        return (
            <div className="no-result-wrapper">
                <img src={window.noResult} alt="no results"/>
                <div className="no-result-text-box">
                    <p className="no-res-text">No results found</p>
                    <p>Try searching with different keywords</p>
                </div>
            </div>
        )
    }

    render() {

        if (this.props.videos.length === 0) return this.renderNoResult();

        return (
            <div className="search-result-container">
                <p className="srheader">Search results</p>
                <div className="video-results-container">
                    <ul className="video-results">
                        {this.props.videos.map(video => {
                            return <SearchItem key={video.id} video={video}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);