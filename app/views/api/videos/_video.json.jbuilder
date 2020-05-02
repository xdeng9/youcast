json.extract! video, :id, :title, :description, :view_count, :creator_id
json.videoUrl url_for(video.video)
json.thumbnail url_for(video.thumbnail)
json.creator video.creator.username