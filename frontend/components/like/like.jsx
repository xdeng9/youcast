import React from 'react';
import { withRouter } from 'react-router-dom';

class Like extends React.Component {

    handleLike(e, likeId, likeColor, dislikeColor) {
        e.preventDefault();
        if (!this.props.currentUser) this.props.history.push('/login');
        if (!likeId && likeColor === '' && dislikeColor === '') {
            this.props.createLike(
                { status: 1, likeable_type: 'Video', likeable_id: this.props.match.params.videoId });
        } else if (likeId && dislikeColor === '') {
            this.props.deleteLike(likeId);
        } else if (likeId && likeColor === '') {
            this.props.updateLike(likeId, { status: 1 })
        }
    }

    handleDislike(e, likeId, likeColor, dislikeColor) {
        e.preventDefault();
        if (!this.props.currentUser) this.props.history.push('/login');
        if (!likeId && likeColor === '' && dislikeColor === '') {
            this.props.createLike(
                { status: -1, likeable_type: 'Video', likeable_id: this.props.match.params.videoId });
        } else if (likeId && dislikeColor === '') {
            this.props.updateLike(likeId, { status: -1 })
        } else if (likeId && likeColor === '') {
            this.props.deleteLike(likeId);
        }
    }

    componentDidMount() {
        this.props.fetchLikes(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.fetchLikes(this.props.match.params.videoId);
        }
    }

    render() {

        let likeCount = 0;
        let dislikeCount = 0; 
        let likeColor = '';
        let dislikeColor = '';
        let likeId = null;
        let userId = this.props.currentUser ? this.props.currentUser.id : null;
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i].status === 1) {
                likeCount++;
                if (userId === this.props.likes[i].user_id) {
                    likeColor = 'high-light';
                    likeId = this.props.likes[i].id;
                } 
            }
            else if (this.props.likes[i].status === -1) {
                if (userId === this.props.likes[i].user_id) {
                    dislikeColor = 'high-light';
                    likeId = this.props.likes[i].id;
                } 
                dislikeCount++;
            } 
        }
     
        return (
            <div className="details-likes">
                <div className="thumb-up">
                    <i className={`fas fa-thumbs-up hover ${likeColor}`} 
                    onClick={e => this.handleLike(e, likeId, likeColor, dislikeColor)}></i>
                        <span className="like-counter">{likeCount}</span>
                </div>
                <div className="thumb-down">
                    <i className={`fas fa-thumbs-down hover ${dislikeColor}`} 
                    id="down-vote"
                    onClick={e => this.handleDislike(e, likeId, likeColor, dislikeColor)}></i>
                        <span className="dislike-counter">{dislikeCount}</span>
                </div>
            </div>
        )
    }
}

export default withRouter(Like);