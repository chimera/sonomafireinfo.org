class Text
  def self.send_message(msg)
    typeform_id = ENV['TYPEFORM_ID']

    form = Typeform::Form.new(typeform_id)
    numbers = form.complete_entries.responses.map { |x| x.answers["textfield_63444528"].gsub(/\D/, '') }.sort.uniq

    client = Twilio::REST::Client.new ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN']
    numbers.each do |number|
      begin
        Rails.logger.info "Send message to #{number}"
        client.api.account.messages.create(
          from: '+17078004983',
          to: "+1#{number}",
          body: "SonomaFireInfo.com: #{msg}"
        )
      rescue Exception => e
        Rails.logger.error "Failed #{e}"
      end
    end
  end
end
