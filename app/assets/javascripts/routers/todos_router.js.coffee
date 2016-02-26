class RailsBackboneTodo.Routers.Todos extends Backbone.Router
  routes:
    '': 'index'

  initialize: ->
    @collection = new RailsBackboneTodo.Collections.Todos()
    @collection.fetch()

  index: ->
    index_view = new RailsBackboneTodo.Views.TodosIndex(collection: @collection)
    $('#container').html(index_view.render().el)