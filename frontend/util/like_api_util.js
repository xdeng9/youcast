export const fetchLikes = videoId => {
    return $.ajax({
        url: `api/videos/${videoId}/likes`
    })
}

export const createLike = like => {
    return $.ajax({
        url: 'api/likes',
        method: 'POST',
        data: { like }
    })
}

export const updateLike = (likeId, like) => {
    return $.ajax({
        url: `api/likes/${likeId}`,
        method: 'PATCH',
        data: { like }
    })
}

export const deleteLike = likeId => {
    return $.ajax({
        url: `api/likes/${likeId}`,
        method: 'DELETE'
    })
}