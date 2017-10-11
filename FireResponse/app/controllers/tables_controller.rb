class TablesController < ApplicationController

  AirtableSheets.each do |k,v|
    define_method(k) do
      records = ::Rails.cache.fetch("cache/#{k}/records", expires_in: 30.seconds) do
        sort = v[:sort] rescue {}
        recs = v[:klass].to_s.constantize.all(sort: sort)

        recs
      end

      render json: records
    end

    define_method("#{k}_v2") do
      records = ::Rails.cache.fetch("cache/#{k}/records_v2", expires_in: 30.seconds) do
        sort = v[:sort] rescue {}
        recs = v[:klass].to_s.constantize.all(sort: sort)

        {
          fields: recs.map { |x| x.column_mappings }.inject { |x,y| x.merge(y) },
          items: recs,
        }
      end

      render json: records
    end
  end
end
