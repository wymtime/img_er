ImgEr.Views.CommentItem = Backbone.CompositeView.extend({
    template: JST["comments/comment_item"],
    
    render: function() {
        var content = this.template({
           comment: this.model 
        });
        this.$el.html(content);
       
        return this;
    }
});