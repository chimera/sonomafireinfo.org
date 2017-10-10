class TablesController < ApplicationController
  def recent_news
    render json: RecentNews.all.to_json
  end

  def resources
    render json: Resources.all.to_json
  end

  def support_services
    render json: SupportServices.all.to_json
  end

  def gas_stations
    render json: GasStations.all.to_json
  end

  def markets
    render json: Markets.all.to_json
  end

  def shelters
    render json: Shelters.all.to_json
  end

  def volunteering
    render json: Volunteering.all.to_json
  end
end
