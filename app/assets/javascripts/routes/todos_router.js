RailsBackboneTodo.Routers.TodosRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'backbone(/)': 'index'
  },
  index: function(){
    var todos = new RailsBackboneTodo.Collections.Todos();
    todos.fetch({
      success: function(data, response){
        console.log(data);
      }
    });
  }
});