define(['backbone', 'tpl!templates/app.tpl'], function (Backbone, template) {
  var App = Backbone.View.extend({
    template: template,

    events: {'click .nav a': 'toggleMenu'},

    initialize: function () {
      console.log('views.app: initializing.');
      this.$el = $('body');
    },
    render: function () {
      console.log('views.app: rendering.');
      this.$el.html(this.template());
    },

    toggleMenu: function () {
      if ($(window).width() <= 132)
      $(".navbar-toggle").trigger( "click" );
    }
  });

  return App;
});