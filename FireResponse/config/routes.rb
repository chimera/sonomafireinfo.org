Rails.application.routes.draw do
  AirtableSheets.keys.each do |x|
    get "/#{x}", to: "tables##{x}"
  end
end
