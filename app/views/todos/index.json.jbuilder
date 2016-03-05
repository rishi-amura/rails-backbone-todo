json.array!(@todos) do |todo|
  json.extract! todo, :id, :name, :done
end
