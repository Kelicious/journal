window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(rootEl, entriesData) {
    var entries = new Journal.Collections.Entries(entriesData);

    new Journal.Routers.EntriesRouter(rootEl, entries);
    Backbone.history.start();
  }
};