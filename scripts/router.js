define(['jquery', 'bootstrap', 'views/app', 'views/main', 'views/about', 'views/login', 'models/app'],
  function ($, Bootstrap, AppView, MainView, AboutView, LoginView, AppModel) {

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
      },

      'about': function () {
        console.log('router: routed about page.');
        if (!app.views.about){
          app.views.about = new AboutView();
        }
        app.views.about.render();
      },

      'login': function () {
        console.log('router: routed login page.');
        if (!app.views.login){
          app.views.login = new LoginView();
        }
        app.views.login.render();
      }
    }

  });

  return Router;
});