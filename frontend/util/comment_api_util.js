export const fectchComments = videoId => {
    return $.ajax({
        url: `api/videos/${videoId}/comments`
    })
}

export const createComment = comment => {
    return $.ajax({
        url: `api/comments`,
        method: 'POST',
        data: { comment }
    })
}

export const updateComment = (commentId, comment) => {
    return $.ajax({
        url: `api/comments/${commentId}`,
        method: 'PATCH',
        data: { comment }
    })
}

export const deleteComment = commentId => {
    return $.ajax({
        url: `api/comments/${commentId}`,
        method: 'DELETE'
    })
}