class RailsBackboneTodo.Views.Todo extends Backbone.View

  template: JST['todos/todo']

  tagName: 'li'
  className: 'todo-list-li row'

  events:
    'dblclick .todo-list-li-text': 'editTodo'
    'click .todo-list-li-delete': 'deleteTodo'
    'keyup .edit-input': 'updateTodo'

  initialize: ->
    @.model.on('destroy', @.remove, this)
    @.model.on('change', @render, this)

  render: ->
    $(@el).html(@template(todo: @model))
    this

  editTodo: (event) ->
    window.prev_view.render() if $.find('.edit-input').length == 1
    window.prev_view = @
    $(@el).html('<input type="text" class="form-control edit-input" value="' + @model.get('name') + '">')

  updateTodo: (event) ->
    @model.save({name: event.currentTarget.value}) if event.keyCode == 13

  deleteTodo: (event) -> @model.destroy() if confirm("Are you sure?")
