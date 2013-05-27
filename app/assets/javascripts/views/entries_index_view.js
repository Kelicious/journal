Journal.Views.IndexView = Backbone.View.extend({
  render: function () {
    var that = this;

    var renderedContent = JST["entries/index"]();

    that.$el.html(renderedContent);
    return that;
  }
});