json.partial! 'api/videos/video', video: @video 

json.comments do 
    @video.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :author_id, :video_id 
            json.author do 
                json.partial! 'api/users/user', user: comment.author
            end
        end
    end
end