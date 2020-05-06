import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { body: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.videoId);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ body: e.currentTarget.value })
    }

    handleComment(e) {
        e.preventDefault();
        if (!this.props.currentUser) this.props.history.push('/login');

        if (this.state.body === '') return;
        let commentField = document.getElementById("comment-input");
        commentField.value = '';
        this.setState({ body: '' })
        let video_id = this.props.match.params.videoId;
        this.props.createComment({ body: this.state.body, video_id })
    }

    render() {
        return (
            <div className="comments-container">
                <div className="comments-header">{this.props.comments.length} Comments</div>
                <div className="add-comment-container">
                    <i className="fas fa-user-circle comment-user-icon"></i>
                    <form className="comment-form" onSubmit={this.handleComment}>
                        <input
                            className="comment-field"
                            id="comment-input"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Add a public comment..." />
                    </form>
                </div>
                <div className="comment-submit-btn-container">
                    <button className="comment-submit-btn" onClick={this.handleComment}>
                        Comment
                    </button>
                </div>
                <ul className="comments-list-container">
                    {this.props.comments.map((comment, idx) => {
                        return <CommentIndexItem key={idx} 
                        comment={comment} 
                        user={this.props.currentUser}
                        deleteComment={this.props.deleteComment}
                        />
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(CommentIndex);