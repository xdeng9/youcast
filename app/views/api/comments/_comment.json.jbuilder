json.extract! comment, :id, :body, :author_id, :video_id
json.author comment.author.username
json.pulished comment.created_at.strftime("%B %d, %Y")