import React from 'react';

class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id);
    }

    renderDeleteBtn() {
        if (this.props.user && this.props.comment) {
            if (this.props.user.username === this.props.comment.author) {
                return (
                    <button className="delete-comment-btn" onClick={this.handleDelete}>
                        Delete
                    </button>
                )
            }
        }
        return null;
    }

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
                    {this.renderDeleteBtn()}
            </li>
        )
    }
}

export default CommentIndexItem;