@likes.each do |like|
    json.set! like.user_id do 
        json.partial! 'api/likes/like', like: like 
    end
end