export const filterVideos = (videos, videoId) => {
    return videos.filter(video => video.id != videoId);
}

export const shuffleVideos = videoArray => {
    for (let i = videoArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [videoArray[i], videoArray[j]] = [videoArray[j], videoArray[i]];
    }
    return videoArray;
}