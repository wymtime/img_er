ImgEr.Views.PostsIndex = Backbone.CompositeView.extend({
    initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
    },

    template: JST['posts/index'],
    
    renderPosts: function() {
        this.collection.each(function(post) {
            var view = new ImgEr.Views.PostsIndexItem({
               model: post 
            });
            
            this.addSubView('#posts', view.render());
        }, this);
    },
    
    render: function() {
        var content = this.template({
           posts: this.collection 
        });
        
        this.$el.html(content);
        
        this.renderPosts();
        
        return this;
    }

});
