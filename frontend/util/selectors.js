export const filterVideos = (videos, videoId) => {
    return videos.filter(video => video.id !== videoId);
}