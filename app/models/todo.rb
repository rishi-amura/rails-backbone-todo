class Todo
  include Mongoid::Document
  field :name, type: String
end
