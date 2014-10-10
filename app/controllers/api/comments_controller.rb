module Api
  class CommentsController < ApplicationController
  
    def create
      @comment = Comment.new(comment_params)
      
      @comment.user_id = current_user.id
    
      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    private
  
    # def current_post
    #   @post = Post.find(params[:post_id])
    # end
  
    def comment_params
      params.require(:comment).permit(:body, :parent_comment_id, :user_id, :post_id)
    end
  end
end