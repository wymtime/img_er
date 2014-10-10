module Api
  class PostsController < ApplicationController
  
    def index
      @posts = Post.all
    end
    
    def show
      @post = Post.find(params[:id])
      @post_author = User.find(@post.user_id)
      
      render partial: "api/posts/post", locals: { post: @post, post_author: @post_author }
    end
    
    def create
      @post = Post.new(post_params)
      @post.user_id = current_user.id
      
      if @post.save
        redirect_to root_url
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end 
    end
    
    def post_comments
      post = Post.find(params[:id])
      @comments = post.comments
    end
  
    private
  
    def post_params
      params.require(:post).permit(:title, :image_url, :description, :user_id)
    end
  end
end