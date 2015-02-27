define(['backbone', 'tpl!templates/app.tpl'], function (Backbone, template) {
  var App = Backbone.View.extend({
    template: template,
    initialize: function () {
      console.log('views.app: initializing.');
      this.$el = $('body');
    },
    render: function () {
      console.log('views.app: rendering.');
      this.$el.html(this.template());
    }
  });

  return App;
});