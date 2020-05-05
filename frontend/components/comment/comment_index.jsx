import React from 'react';

class CommentIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { body: '' }
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
            </div>
        )
    }
}

export default CommentIndex;