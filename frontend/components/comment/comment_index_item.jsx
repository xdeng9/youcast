import React from 'react';

class CommentIndexItem extends React.Component {

    render() {
        return (
            <li>
                <p>{this.props.comment.body}</p>
            </li>
        )
    }
}

export default CommentIndexItem;