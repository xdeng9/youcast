class Api::VideosController < ApplicationController
    before_action :require_login, only: [:create, :update, :destroy]

    def index
        @videos = Video.all 
        render :index 
    end

    def show
        @video = Video.find_by(id: params[:id])

        if @video
            @video.view_count += 1
            @video.save
            render :show 
        else
            render json: ['video not found'], status: 401
        end
    end

    def create
        @video = Video.new(video_params)
        @video.creator_id = current_user.id 
        @video.view_count = 0

        if @video.save 
            render :show 
        else 
            render json: @video.errors.full_messages, status: 401
        end
    end

    def update 
        @video = Video.find_by(id: params[:id])
        if @video.update(video_params)
            render :show 
        else
            render json: @video.errors.full_messages, status: 401
        end
    end

    def destroy
        @video = Video.find_by(id: params[:id])
        if @video.creator_id == current_user.id 
            @video.destroy
            render :show 
        else
            render json: ['Must be the owner to delete this video'], status: 401 
        end
    end

    private
    def video_params
        params.require(:video).permit(:title, :description, :thumbnail, :video)
    end
end
