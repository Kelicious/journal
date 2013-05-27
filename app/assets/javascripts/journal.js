window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($sidebar, $content, entriesData) {
    var entries = new Journal.Collections.Entries(entriesData);

    this.installSidebar($sidebar, entries);

    new Journal.Routers.EntriesRouter($content, entries);
    Backbone.history.start();
  },

  installSidebar: function ($sidebar, entries) {
    var that = this;

    var entriesListView = new Journal.Views.EntriesListView({
      collection: entries
    });

    $sidebar.html(entriesListView.render().$el);
  }
};