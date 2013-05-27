Journal.Views.EntryDetailView = Backbone.View.extend({
  events: {
    "dblclick h2.title": "updateTitle",
    "dblclick p.body": "updateBody",
    "focusout input[name=entry\\[title\\]]": "submitTitle",
    "focusout textarea[name=entry\\[body\\]]": "submitBody",
  },

  render: function () {
    var that = this;

    var renderedContent = JST["entries/detail"]({
      entry: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  updateTitle: function () {
    var that = this;

    that.$title = that.$el.find("h2.title");
    that.$titleInput = $("<input name=\"entry[title]\">");
    that.$titleInput.val(that.$title.text());
    that.$title.replaceWith(that.$titleInput);
  },

  submitTitle: function () {
    var that = this;

    that.model.set({title: $("input[name=entry\\[title\\]]").val()});
    that.model.save();

    that.$title.text(that.$titleInput.val());
    that.$titleInput.replaceWith(that.$title);
  },

  updateBody: function () {
    var that = this;

    that.$body = that.$el.find("p.body");
    that.$bodyTextarea = $("<textarea name=\"entry[body]\"></textarea>");
    that.$bodyTextarea.val(that.$body.text());
    that.$body.replaceWith(that.$bodyTextarea);
  },

  submitBody: function () {
    var that = this;

    that.model.set({body: $("textarea[name=entry\\[body\\]]").val()});
    that.model.save();

    that.$body.text(that.$bodyTextarea.val());
    that.$bodyTextarea.replaceWith(that.$body);
  }
});