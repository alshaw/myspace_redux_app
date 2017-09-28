class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
    def show
      render json: @post
    end

    def create
      post = current_user.posts.create(post_params)
      if post.save
        render json: post
      else
        render json: error_status(post), status: 422
    end

    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: error_status(@post), status: 422
      end
    end

    def destroy
      @post.destroy
    end

    def index
      render json: Post.all
    end

    private
    def post_params
      params.require(:post).permit(:body)
    end

    def set_posts
      @post = current_user.posts.find(params[:id])
    end

end


