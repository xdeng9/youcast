class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        
        if @user.nil?
            render json: ['Invalid username or password'], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        @user = current_user
        if logged_in?
            logout!
            render 'api/users/show'
        else
            render json: ['No current user'], status: 404
        end
    end
end
