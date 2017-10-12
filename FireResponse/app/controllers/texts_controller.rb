class TextsController < ApplicationController
  http_basic_authenticate_with name: "sonomafireinfo", password: ENV['SONOMAFIRE_BASIC_AUTH']

  def create
    Text.send_sms params[:message]

    render text: 'ok'
  end
end
