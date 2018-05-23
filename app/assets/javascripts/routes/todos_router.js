RailsBackboneTodo.Routers.TodosRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'active': 'activeTodos',
    'completed': 'completedTodos',
    'backbone(/)': 'index'
  },
  events: {
  },
  initialize: function(){
    this.collection = new RailsBackboneTodo.Collections.Todos();
    this.collection.fetch();
  },
  index: function(){
    this.renderMainView();
  },
  activeTodos: function(){
    this.renderMainView(false);
  },
  completedTodos: function(){
    this.renderMainView(true);
  },
  renderMainView: function(flag){
    var index_view = new RailsBackboneTodo.Views.TodosIndex({collection: this.collection, flag: flag});
    $('#container').html(index_view.render().el);
  }
});