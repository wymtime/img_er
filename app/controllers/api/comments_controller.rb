class CommentsController < ApplicationController
  
  private
  
  def comment_params
    params.require(:comment).permit(:body, :parent_comment_id, :user_id, :post_id)
  end
end
