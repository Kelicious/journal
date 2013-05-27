Journal.Routers.EntriesRouter = Backbone.Router.extend({
  initialize: function (rootEl, entries) {
    this.$rootEl = $(rootEl);
    this.entries = entries;
  },

  routes: {
    "": "index",
    "entries/new": "new",
    "entries/:id": "show"
  },

  index: function () {
    var that = this;

    var entriesListView = new Journal.Views.EntriesListView({
      collection: that.entries
    });

    that.$rootEl.html(entriesListView.render().$el);
  },

  new: function () {
    var that = this;

    var newEntryView = new Journal.Views.NewEntryView({
      collection: that.entries
    });

    that.$rootEl.html(newEntryView.render().$el);
  },

  show: function(id) {
    var that = this;

    var entry = that.entries.get(id);
    console.log(entry);
    var entryDetailView = new Journal.Views.EntryDetailView({
      model: entry
    });

    that.$rootEl.html(entryDetailView.render().$el);
  }
});