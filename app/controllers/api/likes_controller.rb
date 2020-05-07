class Api::LikesController < ApplicationController
    before_action :require_login, only: [:create, :update, :destroy]

    def index
        @likes = Like.where(likeable_id: params[:video_id])
        render :index 
    end

    def create
        @like = Like.new(like_params)
        @like.user_id = current_user.id 
        if @like.save 
            render :show 
        else
            render json: ['Unable to process this operation'], status: 401
        end
    end

    def update
        @like = Like.find_by(id: params[:id])
        if @like.update(like_params)
            render :show 
        else
            render json: ['Unable to process this operation'], status: 401
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like && @like.user_id == current_user.id 
            @like.destroy
            render :show
        else 
            render json: ['Must be the owner to perform this action'], status: 401
        end
    end

    private

    def like_params
        params.require(:like).permit(:status, :likeable_type, :likeable_id)
    end
end
