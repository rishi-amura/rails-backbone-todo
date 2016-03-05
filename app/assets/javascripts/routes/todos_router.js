RailsBackboneTodo.Routers.TodosRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'backbone(/)': 'index'
  },
  initialize: function(){
    this.collection = new RailsBackboneTodo.Collections.Todos();
    this.collection.fetch();
  },
  index: function(){
    var index_view = new RailsBackboneTodo.Views.TodosIndex({collection: this.collection});
    $('#container').html(index_view.render().el)
  }
});