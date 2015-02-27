define(['backbone'], function (Backbone) {
  var App = Backbone.Model.extend({
    initialize: function () {
      console.log('models.app: initializing.');

    }
  });

  return App;
});