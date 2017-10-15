require "google/cloud/translate"

class TranslationsController < ApplicationController
  def index
    translate = Google::Cloud::Translate.new

    translation = translate.translate params[:body], to: "en"

    # puts translation #=> Salve mundi!

    # translation.from #=> "en"
    # translation.origin #=> "Hello world!"
    # translation.to #=> "la"
    # translation.text #=> "Salve mundi!"

    render plain: translation.text
  end
end
