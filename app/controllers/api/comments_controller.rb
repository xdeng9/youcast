class Api::CommentsController < ApplicationController

    before_action :require_login, only: [:create, :update, :destroy]

    def index 
        @comments = Comment.where(video_id: params[:video_id])
        render :index 
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id 
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show 
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = Comment.delete(id: params[:id])
        if @comment.author_id == current_user.id 
            @comment.destroy
            render :show 
        else
            render json: ['Must be the owner to delete this comment'], status: 401 
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :video_id)
    end
end
