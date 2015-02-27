define(['backbone', 'tpl!templates/about.tpl'], function (Backbone, template) {
  var App = Backbone.View.extend({
    template: template,
    initialize: function () {
      console.log('views.about: initializing.');
      this.$el = $('#app-body');
    },
    render: function () {
      console.log('views.about: rendering.');
      this.$el.html(this.template());
    }
  });

  return App;
});