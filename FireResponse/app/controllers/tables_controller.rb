class TablesController < ApplicationController

  AirtableSheets.each do |k,v|
    define_method(k) do
      records = ::Rails.cache.fetch("cache/#{k}/records", expires_in: 30.seconds) do
        sort = v[:sort] rescue {}
        recs = v[:klass].all(sort: sort)

        {
          fields: recs.map { |x| x.column_mappings }.inject { |x,y| x.merge(y) },
          items: recs,
        }
      end

      render json: records
    end
  end
end
