require.config({
  paths: {
    'jquery': 'libs/jquery/dist/jquery',
    'backbone': 'libs/backbone/backbone',
    'underscore': 'libs/underscore/underscore',
    'bootstrap': 'libs/bootstrap/dist/js/bootstrap',
    'tpl': 'libs/requirejs-tpl/tpl',
    'd3': 'libs/d3/d3'
  },
  shims: {
    backbone: {depts: ['jquery', 'underscore'], exports: 'Backbone'},
    bootstrap: {depts: ['jquery']},
    d3: {exports: 'd3'}
  }
});

//extra time to show the splash screen loader - muhaha!
setTimeout(function() {
  require(['router'], function (Router) {
    console.log('requirejs: main');
    app = window.app || {};

    app.router = new Router();
    Backbone.history.start();

    $('.loading').css('display', 'none');
  });
}, 0);