define(['backbone', 'd3', 'tpl!templates/main.tpl', 'views/graph', 'models/data'],
  function (Backbone, d3, template, Graph, Data) {
  var App = Backbone.View.extend({
    template: template,

    initialize: function () {
      console.log('views.main: initializing.');
      this.$el = $('#app-body');

      app.models = app.models || {};
      app.models.data = new Data();
    },
    render: function () {
      console.log('views.main: rendering.');
      this.$el.html(this.template());
      var graph = new Graph({model: app.models.data});
      graph.render();
    }
  });

  return App;
});