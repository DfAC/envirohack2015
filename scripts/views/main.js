define(['backbone', 'd3', 'tpl!templates/main.tpl'], function (Backbone, d3, template) {
  var App = Backbone.View.extend({
    template: template,
    initialize: function () {
      console.log('views.main: initializing.');
      this.$el = $('#app-body');
    },
    render: function () {
      console.log('views.main: rendering.');
      this.$el.html(this.template());
    }
  });

  return App;
});