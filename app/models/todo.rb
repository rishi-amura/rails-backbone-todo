class Todo
  include Mongoid::Document

  field :name, type: String
  field :done, type: Boolean, default: false
end
