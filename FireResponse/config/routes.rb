Rails.application.routes.draw do
  ['recent_news', 'resources', 'support_services', 'gas_stations', 'markets', 'shelters', 'volunteering'].each do |x|
    get "/#{x}", to: "tables##{x}"
  end
end
