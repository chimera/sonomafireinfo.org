class RecentNewsController < ApplicationController
  def index
    render json: RecentNews.all.to_json
  end

  def show

  end
end
