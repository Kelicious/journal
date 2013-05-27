Journal.Routers.EntriesRouter = Backbone.Router.extend({
  initialize: function (rootEl, entries) {
    this.$rootEl = $(rootEl);
    this.entries = entries;
  },

  routes: {
    "": "index",
    "entries/:id": "show"
  },

  index: function () {
    var that = this;

    var entriesListView = new Journal.Views.EntriesListView({
      collection: that.entries
    });

    that.$rootEl.html(entriesListView.render().$el);
  },

  show: function(id) {
    console.log("Showing entry #" + id);
  }
});