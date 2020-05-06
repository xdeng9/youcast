import React from 'react';

class CommentIndexItem extends React.Component {

    render() {
        return (
            <li className="comment-item-container">
                <i className="fas fa-user-circle comment-user-icon"></i>
                <div className="comment-details-box">
                    <div className="comment-user-date">
                        <p className="comment-username">
                            {this.props.comment.author}
                        </p>
                        <p className="comment-doc">
                            {this.props.comment.published}
                        </p>
                    </div>
                    <p>{this.props.comment.body}</p>
                </div>
            </li>
        )
    }
}

export default CommentIndexItem;