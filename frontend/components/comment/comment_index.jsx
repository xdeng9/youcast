import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { body: '' }
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.videoId);
    }

    render() {
        return (
            <div className="comments-container">
                <div className="comments-header">Comments</div>
                <div className="add-comment-container">
                    <i className="fas fa-user-circle comment-user-icon"></i>
                    <form className="comment-form">
                        <input
                            className="comment-field"
                            type="text"
                            placeholder="Add a public comment..." />
                    </form>
                </div>
                <div className="comment-submit-btn-container">
                    <button className="comment-submit-btn">Comment</button>
                </div>
                <ul className="comments-list-container">
                    {this.props.comments.map((comment, idx) => {
                        return <CommentIndexItem key={idx} comment={comment} />
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(CommentIndex);