json.array!(@todos) do |todo|
  json.extract! todo, :name
  json.id todo.id.to_s
end
