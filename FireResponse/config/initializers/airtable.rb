Airrecord.api_key = ENV['AIRTABLE_BASE']

AirtableSheets = {
  recent_news: {
    klass: RecentNews,
    sort: { "Last Updated" => "desc" },
  },
  resources: { klass: Resources },
  support_services: { klass: SupportServices },
  gas_stations: { klass: GasStations},
  markets: { klass: Markets },
  shelters: {
    klass: Shelters,
    sort: { "Name" => "asc" },
  },
  volunteering: { klass: Volunteering },
  animals: { klass: Animals },
}
