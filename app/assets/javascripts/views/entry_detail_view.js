Journal.Views.EntryDetailView = Backbone.View.extend({
  events: {
    "dblclick div.title": "updateTitle",
    "dblclick div.body": "updateBody",
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

    $("div.title").children().addClass("edit").removeClass("view");
    $("div.title > input").focus();
  },

  submitTitle: function () {
    var that = this;

    that.model.set({title: $("input[name=entry\\[title\\]]").val()});
    that.model.save();

    $("div.title > h2").text(that.model.get("title"));
    $("div.title").children().addClass("view").removeClass("edit");
  },

  updateBody: function () {
    var that = this;

    $("div.body").children().addClass("edit").removeClass("view");
    $("div.body > textarea").focus();
  },

  submitBody: function () {
    var that = this;

    that.model.set({body: $("textarea[name=entry\\[body\\]]").val()});
    that.model.save();

    $("div.body > p").text(that.model.get("body"));
    $("div.body").children().addClass("view").removeClass("edit");
  }
});