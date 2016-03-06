RailsBackboneTodo.Views.TodosIndex = Backbone.View.extend({
  template: JST['todos/index'],
  events: {
    'keyup #todo-input': 'getInput'
  },
  initialize: function(){
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.prependList, this);
    this.collection.on('add', this.updateItemsCounter, this);
    this.collection.on('change', this.updateItemsCounter, this);
    this.collection.on('remove', this.updateItemsCounter, this);
  },
  render: function(){
    $(this.el).html(this.template());
    this.collection.each(this.prependList);
    return(this);
  },
  prependList: function(model){
    var view = new RailsBackboneTodo.Views.Todo({model: model});
    $('#todo-list').prepend(view.render().el);
  },
  getInput: function(event){
    if(event.keyCode == 13)
      this.createModel();
  },
  createModel: function(){
    var todo_select =  $('#todo-input');
    this.collection.create({name: todo_select.val()});
    todo_select.val('');
  },
  updateItemsCounter: function() {
    $('#todo-done-counter').html(this.collection.where({done: false}).length);
  }
});