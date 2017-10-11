Airrecord.api_key = ENV['AIRTABLE_BASE']

AirtableSheets = {
  recent_news: {
    klass: :RecentNews,
    sort: { "Last Updated" => "desc" },
  },
  shelters: {
    klass: :Shelters,
    sort: { "Name" => "asc" },
  },
  resources: { klass: :Resources },
  important_info: { klass: :ImportantInfo },
  support_services: { klass: :SupportServices },
  donations: { klass: :Donations },
  gas_stations: { klass: :GasStations},
  markets: { klass: :Markets },
  volunteering: { klass: :Volunteering },
  animals: { klass: :Animals },
  schools: { klass: :Schools },
  social_media: { klass: :SocialMedia },
  pharmacies: { klass: :Pharmacies },
  evacuations: { klass: :Evacuations },
  shelter_contacts: { klass: :ShelterContacts },
  stats: { klass: :Stats },
}

AirtableSheets.each do |k,v|

  klass = Class.new(Airrecord::Table) do
    self.base_key = "appsj7gOti4YuE2v1"
    self.table_name = v[:klass].to_s
  end

  Object.const_set(v[:klass], klass)
end
