class RailsBackboneTodo.Views.Todo extends Backbone.View

  template: JST['todos/todo']

  tagName: 'li'

  className: 'todo-list-li'

  initialize: (options) ->
    @options = options
    @todo = @options.todo

  render: ->
    $(@el).html(@template(todo: @todo))
    this
