json.array!(@todos) do |todo|
  json.extract! todo, :name, :id
end
