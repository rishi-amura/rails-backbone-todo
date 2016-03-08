window.RailsBackboneTodo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    RailsBackboneTodo.Routers.todoRouter = new RailsBackboneTodo.Routers.TodosRouter();
    return Backbone.history.start({
      pushState: true
    });
  }
};

$(document).ready(function(){
  RailsBackboneTodo.initialize();
});
