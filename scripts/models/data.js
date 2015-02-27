define(['backbone'], function (Backbone) {
  var Data = Backbone.Model.extend({
    initialize: function () {
      console.log('models.data: initializing.');

    }
  });

  return Data;
});