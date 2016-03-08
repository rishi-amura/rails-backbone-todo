RailsBackboneTodo.Views.TodosIndex = Backbone.View.extend({
  template: JST['todos/index'],
  events: {
    'keyup #todo-input': 'getInput',
    'click #clear-completed-link': 'clearCompleted',
    'click #all-todos-link': 'renderAllTodos',
    'click #active-todos-link': 'renderActiveTodos',
    'click #completed-todos-link': 'renderCompletedTodos'
  },
  initialize: function(options){
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.prependList, this);
    this.collection.on('add', this.updateItemsCounter, this);
    this.collection.on('change', this.updateItemsCounter, this);
    this.collection.on('remove', this.updateItemsCounter, this);
    this.collection.on('add', this.enableClearLink, this);
    this.collection.on('change', this.enableClearLink, this);
    this.collection.on('remove', this.enableClearLink, this);
    this.options = options;
  },
  render: function(){
    $(this.el).html(this.template());
    this.collection.each(this.prependList);
    return(this);
  },
  prependList: function(model){
    if(this.options.flag === undefined || this.options.flag === model.get('done')){
      var view = new RailsBackboneTodo.Views.Todo({model: model});
      $('#todo-list').prepend(view.render().el);
    }
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
  },
  enableClearLink: function() {
    $('#clear-completed-link').attr('hidden', this.collection.where({done: true}).length <= 0);
  },
  clearCompleted: function() {
    var todos_completed = this.collection.where({done: true});
    _.each(todos_completed, function(model) { model.destroy(); });
  },
  renderAllTodos: function() {
    this.performNavigation('/');
  },
  renderActiveTodos: function() {
    this.performNavigation('active');
  },
  renderCompletedTodos: function() {
    this.performNavigation('completed');
  },
  performNavigation: function(url) {
    var todos_router = new RailsBackboneTodo.Routers.TodosRouter();
    todos_router.navigate(url, {trigger: true});
  }
});