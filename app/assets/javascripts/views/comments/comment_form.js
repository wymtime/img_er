ImgEr.Views.CommentForm = Backbone.CompositeView.extend({
    
    template: JST['comments/comment_form'],
    
    events: {
        'click .submit-comment': 'create'  
    },
   
    create: function(event) {
        event.preventDefault();
        var newComment = new ImgEr.Models.Comment({
          body: this.$('textarea').val(),
          post_id: this.collection.post.id
        });

        var that = this;

        newComment.save({}, {
           success: function() {
               that.collection.add(newComment);
           }
        });
    },
    
    render: function() {
        var content = this.template({
           
        });
        this.$el.html(content);
       
        return this;
    }
});