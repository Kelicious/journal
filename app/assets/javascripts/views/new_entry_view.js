Journal.Views.NewEntryView = Backbone.View.extend({
  events: {
    "click button.submit": "submit"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["entries/new"]();
    that.$el.html(renderedContent);
    return that;
  },

  submit: function () {
    var that = this;

    var entry = new Journal.Models.Entry({
      title: that.$("input[name=entry\\[title\\]]").val(),
      body: that.$("textarea[name=entry\\[body\\]]").val()
    });

    that.collection.add(entry);
    entry.save();
    Backbone.history.navigate("#/");
  }
});