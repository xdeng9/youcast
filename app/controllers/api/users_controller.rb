class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show 
        else 
            render json: @user.errors.full_messages, status: 401
        end
    end

    def valid_email?
        user = User.find_by(email: params[:email])
        if user 
            render json: { valid_email: true, email: params[:email], error: false }
        else
            render json: { valid_email: false, error: true }
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

    
end
