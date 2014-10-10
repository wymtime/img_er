window.ImgEr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new ImgEr.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  ImgEr.initialize();
});
