require.config({
  paths: {
    'jquery': 'libs/jquery/dist/jquery',
    'backbone': 'libs/backbone/backbone',
    'underscore': 'libs/underscore/underscore',
    'bootstrap': 'libs/bootstrap/dist/js/bootstrap',
    'tpl': 'libs/requirejs-tpl/tpl'
  },
  shims: {
    backbone: {depts:['jquery', 'underscore'], export: 'Backbone'}
  }
});


require(['router'], function (Router) {
  console.log('requirejs: main');
  app = window.app || {};

  app.router = new Router();
  Backbone.history.start();
});