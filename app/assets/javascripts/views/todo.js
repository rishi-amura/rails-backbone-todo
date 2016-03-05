RailsBackboneTodo.Views.Todo = Backbone.View.extend({
  template: JST['todos/todo'],
  tagName: 'li',
  className: 'todo-list-li row',
  events: {
    'dblclick .todo-list-li-text': 'editTodo',
    'click .todo-list-li-delete': 'deleteTodo',
    'keyup .edit-input': 'updateTodo'
  },
  initialize: function(){
    this.model.on('destroy', this.remove, this);
    this.model.on('change', this.render, this);
  },
  render: function(){
    $(this.el).html(this.template({todo: this.model}));
    return(this);
  },
  editTodo: function(){
    if($.find('.edit-input').length == 1)
      window.prev_view.render();
    window.prev_view = this;
    $(this.el).html('<input type="text" class="form-control edit-input" value="' + this.model.get('name') + '">');
  },
  updateTodo: function(event){
    if(event.keyCode == 13)
      this.model.save({name: event.currentTarget.value});
  },
  deleteTodo: function(){
    if(confirm("Are you sure?"))
      this.model.destroy();
  }
});