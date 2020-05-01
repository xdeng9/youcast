export const fetchVideos = () => {
    return $.ajax({
        url: 'api/videos',
        method: 'GET'
    })
}

export const fetchVideo = videoId => {
    return $.ajax({
        url: `api/videos/${videoId}`,
        method: 'GET'
    })
}