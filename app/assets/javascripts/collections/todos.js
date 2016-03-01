RailsBackboneTodo.Collections.Todos = Backbone.Collection.extend({
  urlRoot: '/todos',
  url: '/todos',
  Model: RailsBackboneTodo.Models.Todo
});
