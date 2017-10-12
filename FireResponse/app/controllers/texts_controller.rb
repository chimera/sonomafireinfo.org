class TextsController < ApplicationController
  def create
    if params['From'] == ENV['SONOMAFIRE_FROM_NUMBER'] && Rails.env.production?
      TextJob.perform_later params['Body']
    else
      puts "Send message #{params['Body']}"
    end

    render text: 'ok'
  end
end
