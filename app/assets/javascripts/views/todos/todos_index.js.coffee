class RailsBackboneTodo.Views.TodosIndex extends Backbone.View

  template: JST['todos/index']

  events:
    'click #create-todo': 'createTodo'

  initialize: ->
    @collection.on('reset', @render, this)

  render: ->
    $('#container').html(@template())
    @collection.each(@renderTodo)

  renderTodo: (todo) ->
    todo_view = new RailsBackboneTodo.Views.Todo(todo: todo)
    $('#todo-list').append(todo_view.render().el)

  createTodo: (event) ->
    event.preventDefault()

