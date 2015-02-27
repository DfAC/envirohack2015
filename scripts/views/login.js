define(['backbone', 'tpl!templates/login.tpl'], function (Backbone, template) {
  var App = Backbone.View.extend({
    template: template,
    initialize: function () {
      console.log('views.login: initializing.');
      this.$el = $('#app-body');
    },
    render: function () {
      console.log('views.login: rendering.');
      this.$el.html(this.template());
    }
  });

  return App;
});