class TextJob < ActiveJob::Base
  queue_as 'texts'

  def perform(msg_body)
    Text.send_message msg_body
  end
end
