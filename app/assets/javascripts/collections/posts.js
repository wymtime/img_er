ImgEr.Collections.Posts = Backbone.Collection.extend({

  model: ImgEr.Models.Post,
  
  url: "api/posts",
  
  getOrFetch: function(id) {
    var post = this.get(id);
    if (post) {
      return post;
    } else {
      post = new ImgEr.Models.Post({ id: id });
      post.fetch({
        success: function() {
          ImgEr.Collections.posts.add(post);
        }
      });
      return post;
    }
  }

});

ImgEr.Collections.posts = new ImgEr.Collections.Posts
