class TextsController < ApplicationController
  def create
    if params['From'] == ENV['SONOMAFIRE_FROM_NUMBER'] && Rails.env.production?
      Text.send_message params['Body']
    else
      puts "Send message #{params['Body']}"
    end

    render text: 'ok'
  end
end
