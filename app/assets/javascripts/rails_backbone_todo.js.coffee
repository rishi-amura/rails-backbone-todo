window.RailsBackboneTodo =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: ->
    new RailsBackboneTodo.Routers.Todos()
    Backbone.history.start()

$(document).ready ->
  RailsBackboneTodo.initialize()
