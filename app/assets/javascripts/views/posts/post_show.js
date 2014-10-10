ImgEr.Views.PostShow = Backbone.CompositeView.extend({
    initialize: function() {
        this.listenTo(this.model, 'sync', this.render);
        this.listenTo(this.model.comments(), 'sync', this.renderComments);
        this.model.comments().fetch();
    },
    
    className: 'post-container',
    
    template: JST["posts/show"],
    
    renderComments: function() {
        $('#comment-list').empty();
        this.model.comments().each(function(comment) {
            var commentView = new ImgEr.Views.CommentItem({
                model: comment
            });
            this.addSubView('#comment-list', commentView.render());
        }, this);
    },
    
    renderCommentForm: function() {
        var commentFormView = new ImgEr.Views.CommentForm({
           collection: this.model.comments() 
        });
        this.addSubView('#comment-form', commentFormView.render());
    },
    
    render: function() {
        var content = this.template({
           post: this.model 
        });
        
        this.$el.html(content);
        
        this.renderCommentForm();
        this.renderComments();
        
        return this;
    }
});