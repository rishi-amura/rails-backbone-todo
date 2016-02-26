class RailsBackboneTodo.Views.TodosIndex extends Backbone.View

  template: JST['todos/index']

  events:
    'keyup #todo-input': 'getInput'

  initialize: ->
    @collection.on('reset', @render, this)
    @collection.on('add', @prependList, this)

  render: ->
    $(@el).html(@template())
    @collection.each(@prependList)
    this

  prependList: (todo) ->
    view = new RailsBackboneTodo.Views.Todo(model: todo)
    $('#todo-list').prepend(view.render().el)

  createTodo: (event) ->
    event.preventDefault()
    @createModel()

  getInput: (event) -> @createModel() if event.keyCode == 13

  createModel: ->
    @collection.create({name: $('#todo-input').val()})
    $('#todo-input').val('')