ImgEr.Routers.Router = Backbone.Router.extend({
    routes: {
        "": "homePage",
        "posts/:id": "postShow"
    },
    
    homePage: function() {
        ImgEr.Collections.posts.fetch();
        
        var view = new ImgEr.Views.PostsIndex({
            collection: ImgEr.Collections.posts  
        });
        this._swapView(view);
    },
    
    postShow: function(id) {
      var post = ImgEr.Collections.posts.getOrFetch(id);
      
      var view = new ImgEr.Views.PostShow({
          model: post
      });
      
      this._swapView(view); 
    },
    
    _swapView: function(view) {
        if (this.currentView) {
        this.currentView.remove();
        }
        this.currentView = view;
        $("#content").html(this.currentView.render().$el);
    }
});
