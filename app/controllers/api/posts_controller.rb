class PostsController < ApplicationController
  
  def index
    @posts = Post.all
  end
  
  private
  
  def post_params
    params.require(:post).permit(:title, :image_url, :description, :user_id)
  end
end
