class TablesController < ApplicationController

  AirtableSheets.each do |k,v|
    define_method(k) do
      ::Rails.cache.fetch("cache/#{k}", expires_in: 30.seconds) do
        render json: v.all.to_json
      end
    end
  end
end
