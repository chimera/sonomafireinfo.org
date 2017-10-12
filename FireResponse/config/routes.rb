Rails.application.routes.draw do
  AirtableSheets.keys.each do |x|
    get "/v2/#{x}", to: "tables##{x}_v2"
    get "/#{x}", to: "tables##{x}"
  end

  resources :texts
end
