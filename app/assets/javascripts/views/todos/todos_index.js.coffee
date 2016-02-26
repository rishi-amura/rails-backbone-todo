class RailsBackboneTodo.Views.TodosIndex extends Backbone.View

  template: JST['todos/index']

  events:
    'click #create-todo': 'createTodo'
    'dblclick .todo-list-li-text': 'editTodo'
    'click .todo-list-li-delete': 'deleteTodo'
    'keyup #todo-input': 'getInput'

  initialize: ->
    @collection.on('reset', @render, this)
    @collection.on('change', @render, this)
    @collection.on('add', @render, this)
    @collection.on('add', @saveModel, this)
    @collection.on('remove', @render, this)
#    @collection.on('remove', @destroyModel, this)

  render: ->
    $(@el).html(@template(todos: @collection))
    this

  createTodo: (event) ->
    event.preventDefault()
    @createModel()

  getInput: (event) ->
    @createModel() if event.keyCode == 13

  createModel: ->
    todo = new RailsBackboneTodo.Models.Todo({name: $('#todo-input').val()})
    @collection.add(todo)

  editTodo: (event) ->
    console.log('editing')

  deleteTodo: (event) ->
    todo = @collection.findWhere({id: event.currentTarget.id})
    @collection.remove(todo) if todo && confirm("Are you sure?")

  saveModel: (todo) -> todo.save()
  destroyModel: (todo) -> console.log todo