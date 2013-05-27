window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(rootEl, entries) {
    new Journal.Routers.EntriesRouter(rootEl, entries);
    Backbone.history.start();
  }
};