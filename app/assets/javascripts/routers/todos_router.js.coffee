class RailsBackboneTodo.Routers.Todos extends Backbone.Router
  routes:
    '': 'index'

  initialize: ->
    @collection = new RailsBackboneTodo.Collections.Todos()
    @collection.fetch({async: false})

  index: ->
    index_view = new RailsBackboneTodo.Views.TodosIndex(collection: @collection)
    index_view.render()