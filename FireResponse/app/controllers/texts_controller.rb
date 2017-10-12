class TextsController < ApplicationController
  def create
    if params[:password] == ENV['SONOMAFIRE_BASIC_AUTH']
      Text.send_message params[:message]
    end

    render text: 'ok'
  end
end
