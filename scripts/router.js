define(['jquery', 'bootstrap', 'views/app', 'models/app'], function ($, Bootstrap, AppView, AppModel) {

  var Router = Backbone.Router.extend({
    initialize: function () {
      console.log('router: initializing.');
      app = app || {};
      app.models = app.models || {};
      app.models.app = new AppModel();

      app.views = app.views || {};
      app.views.app = new AppView({model: app.models.app});
    },

    routes: {
      '': function () {
        console.log('router: routed welcome page.');
        app.views.app.render();
      }
    }

  });

  return Router;
});