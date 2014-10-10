ImgEr.Collections.Comments = Backbone.Collection.extend({

  model: ImgEr.Models.Comment,
  
  initialize: function(models, options) {
      this.post = options.post;
  },
  
  url: function() {
      return this.post.url() + "/comments"
  },
  
  getOrFetch: function(id) {
      var comment = this.get(id);
      
      if (comment) {
          return comment;
      } else {
          comment = new ImgEr.Models.Comment({ id: id });
          comment.fetch({
             success: function() {
                 ImgEr.Collections.comments.add(comment);
             }
          });
          return comment;
      }
  }

});
