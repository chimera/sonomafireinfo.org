class Text
  def self.send_message(msg)
    typeform_id = ENV['TYPEFORM_ID']

    form = Typeform::Form.new(typeform_id)
    form.complete_entries.responses.map { |x| x.answers["textfield_63444528"] }

    client = Twilio::REST::Client.new ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN']
    client.api.account.messages.create(
      from: '+17078279305',
      to: '+19253953960',
      body: msg
    )
  end
end
