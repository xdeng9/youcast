class Api::VideosController < ApplicationController

    def index
        @videos = Video.all 
        render :index 
    end

    def show
        @video = Video.find_by(id: params[:id])
        @video.view_count += 1
        @video.save
        render :show 
    end

    def create
    end

    private
    def video_params
        params.require(:video).permit(:title, :description)
    end
end
