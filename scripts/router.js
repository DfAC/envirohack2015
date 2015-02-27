define(['jquery', 'bootstrap', 'views/app', 'views/main', 'models/app'], function ($, Bootstrap, AppView, MainView, AppModel) {

  var Router = Backbone.Router.extend({
    initialize: function () {
      console.log('router: initializing.');
      app = app || {};
      app.models = app.models || {};
      app.models.app = new AppModel();

      app.views = app.views || {};
      app.views.app = new AppView({model: app.models.app});
      app.views.app.render();
    },

    routes: {
      '': function () {
        console.log('router: routed welcome page.');
        if (!app.views.main){
          app.views.main = new MainView();
        }
        app.views.main.render();
      }
    }

  });

  return Router;
});