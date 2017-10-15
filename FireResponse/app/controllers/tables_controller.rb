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

        case
        when v[:klass] == :Recovery && params.has_key?(:type)
          recs = recs.select { |x| x.fields['Type'].include?(params[:type]) rescue false }
        when v[:klass] == :School && params.has_key?(:district)
          recs = recs.select { |x| x.fields['District'].include?(params[:district]) rescue false }
        end

        items = if params.has_key?(:lang)
                  recs.map do |i|
                    i.spanish!
                    i
                  end
                else
                  recs
                end

        {
          fields: recs.map { |x| x.column_mappings }.inject { |x,y| x.merge(y) },
          items: items,
        }
      end

      render json: records
    end
  end


end
