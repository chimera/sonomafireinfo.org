require "google/cloud/translate"

class TranslationsController < ApplicationController
  def index

    # puts translation #=> Salve mundi!

    # translation.from #=> "en"
    # translation.origin #=> "Hello world!"
    # translation.to #=> "la"
    # translation.text #=> "Salve mundi!"

    render plain: translation.text
  end
end
