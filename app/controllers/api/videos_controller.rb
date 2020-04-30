class Api::VideosController < ApplicationController

    def index
    end

    def show
    end

    def create
    end

    private
    def video_params
        params.require(:video).permit(:title, :description)
    end
end
