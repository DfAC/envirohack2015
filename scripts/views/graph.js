define(['backbone', 'd3'], function (Backbone, d3) {
  var Graph = Backbone.View.extend({
    el: '#graph',

    initialize: function () {
      console.log('views.graph: initializing.');
      this.listenTo(this.model, 'change', this.update);
    },

    render: function () {
      console.log('views.graph: rendering.');
    },

    update: function () {
      console.log('views.graph: updating.');

    }

  });

  return Graph;
});