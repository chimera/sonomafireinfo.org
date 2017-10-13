require 'open-uri'

class Text
  def self.send_message(msg)
    numbers = open(ENV['NUMBER_SHEET']).read.split("\n").map { |x| x.gsub(/\D/, '') }.sort.uniq

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
