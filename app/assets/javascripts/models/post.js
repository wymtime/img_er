ImgEr.Models.Post = Backbone.Model.extend({
    urlRoot: '/api/posts/',
    
    comments: function() {
      if (!this._comments) {
        this._comments = new ImgEr.Collections.Comments([], {
          post: this
        });
        this._comments.fetch();
      }
      return this._comments;
    },
    
    parse: function(resp) {
      if (resp.comments) {      
        this.comments().set(resp.comments, { parse: true });
        delete resp.comments
      }
      return resp;
    }
});
