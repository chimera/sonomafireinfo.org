class TablesController < ApplicationController

  AirtableSheets.each do |k,v|
    define_method(k) do
      records = ::Rails.cache.fetch("cache/#{k}", expires_in: 30.seconds) do
        sort = { sort: v[:sort] } rescue {}
        v[:klass].all(sort).to_json
      end

      render json: records
    end
  end
end
