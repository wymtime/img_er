ImgEr.Views.PostsIndexItem = Backbone.CompositeView.extend({
   initialize: function() {
       
   },
   
   className: 'col-sm-3',
   
   template: JST['posts/post_item'],
   
   events: {
       'click .post-image-thumb': 'navigateToPost'
   },
   
   navigateToPost: function() {
       //debugger;
       Backbone.history.navigate("/posts/" + this.model.id, true);
   },
   
   render: function() {
       var content = this.template({
          post: this.model 
       });
       this.$el.html(content);
       
       return this;
   }
});